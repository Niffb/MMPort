import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';

const SkillMatrix: React.FC = () => {
  const data = SKILLS.map(s => ({
    subject: s.name.toUpperCase(),
    A: s.level,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-[500px] relative">
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-stone-900"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-stone-900"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-stone-900"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-stone-900"></div>

        <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-stone-400">
            Fig 2.1 — Stylistic Analysis
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            {/* Monochrome Grid */}
            <PolarGrid stroke="#e7e5e4" />
            
            <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#44403c', fontSize: 11, fontFamily: 'Inter', fontWeight: 500, letterSpacing: '1px' }} 
            />
            
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            
            <Radar
              name="Proficiency"
              dataKey="A"
              stroke="#1c1917"
              strokeWidth={1.5}
              fill="#1c1917"
              fillOpacity={0.05}
            />
          </RadarChart>
        </ResponsiveContainer>
        
        {/* Legend / Metadata */}
        <div className="absolute bottom-4 right-4 text-[10px] text-right text-stone-400 font-mono">
            <div>MEDIUM: VARIOUS</div>
            <div>CAT: FINE ART</div>
        </div>
    </div>
  );
};

export default SkillMatrix;