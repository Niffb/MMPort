import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, Loader2, X, Volume2, Mic } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateChatResponse, generateVoiceResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const NeuralInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
      { role: 'model', text: "Welcome to the gallery. I am Aura. How may I guide you through Alex's collection today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isOpen]);

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: query };
    setChatHistory(prev => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    try {
      const responseText = await generateChatResponse(query, chatHistory);
      const aiMsg: ChatMessage = { role: 'model', text: responseText };
      
      setChatHistory(prev => [...prev, aiMsg]);

      if (isVoiceEnabled) {
        await generateVoiceResponse(responseText);
      }
    } catch (error) {
      console.error(error);
      setChatHistory(prev => [...prev, { role: 'model', text: 'I apologize, I encountered a momentary issue. Please try again.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      {!isOpen && (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-10 right-10 z-50 w-12 h-12 bg-stone-900 text-cream rounded-full shadow-2xl flex items-center justify-center hover:bg-stone-800 transition-colors"
        >
            <Sparkles size={18} strokeWidth={1.5} />
        </motion.button>
      )}

      {/* Interface Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-10 right-6 md:right-10 z-50 w-[90vw] md:w-[360px] h-[550px] bg-stone-50/90 backdrop-blur-xl rounded-xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="h-14 border-b border-stone-200/50 flex items-center justify-between px-5 bg-white/50">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-900"></div>
                    <span className="font-serif italic text-stone-800 text-sm font-medium">Concierge</span>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
                        className={`p-1.5 rounded-md transition-all ${isVoiceEnabled ? 'bg-stone-200 text-stone-900' : 'text-stone-400 hover:text-stone-900'}`}
                    >
                        <Volume2 size={14} />
                    </button>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="p-1.5 text-stone-400 hover:text-stone-900 transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6" ref={scrollRef}>
                {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <span className="text-[10px] uppercase tracking-wider text-stone-400 mb-1 ml-1 mr-1">
                            {msg.role === 'user' ? 'You' : 'Aura'}
                        </span>
                        <div 
                            className={`max-w-[85%] p-3.5 text-sm font-light leading-relaxed
                                ${msg.role === 'user' 
                                    ? 'bg-stone-900 text-stone-50 rounded-t-lg rounded-bl-lg' 
                                    : 'bg-white border border-stone-100 text-stone-700 rounded-t-lg rounded-br-lg shadow-sm'
                                } ${msg.isError ? 'text-red-500 border-red-100' : ''}`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-2">
                        <div className="bg-white border border-stone-100 px-3 py-2 rounded-full flex items-center gap-2">
                            <Loader2 size={12} className="animate-spin text-stone-400" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/80 border-t border-stone-200/50 backdrop-blur-sm">
                <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="relative flex items-center group"
                >
                    <input 
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Inquire..."
                        className="w-full bg-transparent border-b border-stone-200 py-2 pr-10 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors font-light"
                        disabled={isLoading}
                    />
                    <button 
                        type="submit"
                        disabled={isLoading || !query.trim()}
                        className="absolute right-0 text-stone-400 hover:text-stone-900 disabled:opacity-30 transition-colors"
                    >
                        <Send size={16} strokeWidth={1.5} />
                    </button>
                </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NeuralInterface;