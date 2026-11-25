import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal, 
  Sparkles, 
  CornerDownLeft, 
  Copy, 
  Check, 
  Maximize2, 
  Minimize2,
  Code2,
  User,
  FolderGit2,
  Send,
  Zap
} from 'lucide-react';
import { toast } from 'react-toastify';

const InteractiveTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [commandHistory, setCommandHistory] = useState([
    {
      type: 'system',
      text: '⚡ VivekOS v2.4.0 [Cyber-Kernel active] — Type "help" or click quick chips below to interact.',
    },
    {
      type: 'command',
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-gray-700">
          <p className="text-emerald-600 font-bold">Hello World! Welcome to Vivek Chaurasiya's Interactive Terminal.</p>
          <p className="text-xs text-gray-500">
            MERN Full Stack Developer specializing in scalable React, Node.js, Express & MongoDB applications.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  const quickCommands = [
    { label: 'help', cmd: 'help', icon: Sparkles },
    { label: 'skills', cmd: 'skills', icon: Code2 },
    { label: 'projects', cmd: 'projects', icon: FolderGit2 },
    { label: 'contact', cmd: 'contact', icon: Send },
    { label: 'sudo hire', cmd: 'sudo hire-vivek', icon: Zap },
    { label: 'clear', cmd: 'clear', icon: Terminal },
  ];

  const handleExecute = (rawCmd) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setCommandHistory([]);
      setInputVal('');
      return;
    }

    let outputContent;

    switch (trimmed) {
      case 'help':
        outputContent = (
          <div className="space-y-1.5 text-xs text-gray-700 font-mono">
            <p className="text-emerald-600 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              <div><span className="text-emerald-600 font-bold">about</span> - Who is Vivek Chaurasiya</div>
              <div><span className="text-emerald-600 font-bold">skills</span> - List all tech stacks & tools</div>
              <div><span className="text-emerald-600 font-bold">projects</span> - View featured flagship projects</div>
              <div><span className="text-emerald-600 font-bold">experience</span> - Work background & timeline</div>
              <div><span className="text-emerald-600 font-bold">contact</span> - Direct email & social links</div>
              <div><span className="text-emerald-600 font-bold">sudo hire-vivek</span> - Initiate fast-track hiring</div>
              <div><span className="text-emerald-600 font-bold">clear</span> - Clear the terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputContent = (
          <div className="space-y-1 text-xs text-gray-700 font-mono">
            <p className="text-gray-900 font-bold">Vivek Chaurasiya — MERN Full Stack Developer</p>
            <p>📍 Location: Lucknow, UP, India (Open to Remote Worldwide)</p>
            <p>💼 Focus: Building robust SaaS, high-concurrency backends, and sleek fluid user experiences.</p>
            <p>⚡ Philosophy: "Clean code, modern design, zero compromises on performance."</p>
          </div>
        );
        break;

      case 'skills':
        outputContent = (
          <div className="space-y-2 text-xs font-mono text-gray-700">
            <div>
              <span className="text-emerald-600 font-bold">[Frontend]:</span> React 19, Next.js, TypeScript, Tailwind CSS, GSAP
            </div>
            <div>
              <span className="text-emerald-600 font-bold">[Backend]:</span> Node.js, Express.js, REST APIs, Microservices, Socket.io
            </div>
            <div>
              <span className="text-emerald-600 font-bold">[Databases]:</span> MongoDB (Aggregations), PostgreSQL, Redis, Mongoose
            </div>
            <div>
              <span className="text-emerald-600 font-bold">[DevOps/Tools]:</span> Git, GitHub, Docker, Postman, Linux, Vite
            </div>
          </div>
        );
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-2 text-xs font-mono text-gray-700">
            <p className="text-emerald-600 font-bold">FEATURED FLAGSHIP PROJECTS:</p>
            <div className="space-y-1.5 pl-2 border-l-2 border-emerald-500/40">
              <p><span className="text-gray-900 font-bold">1. KwikCab</span> — Real-time Fleet Dispatching with Socket.io & MongoDB</p>
              <p><span className="text-gray-900 font-bold">2. Worknest</span> — High-Scale Team Workplace Collaboration Platform</p>
              <p><span className="text-gray-900 font-bold">3. HRMS Portal</span> — Full-Scale Human Resource & Payroll Management</p>
              <p><span className="text-gray-900 font-bold">4. NFT Trading Console</span> — Web3 Wallet Integration & Real-time Bidding</p>
            </div>
          </div>
        );
        break;

      case 'experience':
        outputContent = (
          <div className="space-y-2 text-xs font-mono text-gray-700">
            <div>
              <p className="text-emerald-600 font-bold">DigiCoders Private Limited (2023 - Present)</p>
              <p className="text-gray-600 pl-2">Role: MERN Full Stack Developer • High-scale SaaS, client platforms</p>
            </div>
            <div>
              <p className="text-emerald-600 font-bold">Freelance Engineering (2021 - 2023)</p>
              <p className="text-gray-600 pl-2">Role: Full Stack Web Developer • Global clients & responsive apps</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-xs text-gray-700 font-mono">
            <p className="text-emerald-600 font-bold">DIRECT CHANNELS:</p>
            <p>✉️ Email: vivekchaurasiya.dev@gmail.com</p>
            <p>🐙 GitHub: github.com</p>
            <p>💼 LinkedIn: linkedin.com/in/vivek-chaurasiya-84919029b</p>
          </div>
        );
        break;

      case 'sudo hire-vivek':
      case 'hire':
        outputContent = (
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <span>🚀 ACCESS GRANTED — PRIORITY HIRING CHANNEL OPEN</span>
            </p>
            <p className="text-gray-700">Vivek is open for high-impact full-time and contract roles.</p>
            <p className="text-emerald-700 font-semibold underline">Drop your inquiry directly in the Contact section below!</p>
          </div>
        );
        toast.success("Hiring priority channel unlocked! 🌟");
        break;

      default:
        outputContent = (
          <div className="text-xs font-mono text-rose-500">
            command not found: "{trimmed}". Type <span className="text-emerald-600 font-bold underline cursor-pointer" onClick={() => handleExecute('help')}>help</span> to view all commands.
          </div>
        );
    }

    setCommandHistory((prev) => [
      ...prev,
      { type: 'command', cmd: rawCmd, output: outputContent },
    ]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleExecute(inputVal);
  };

  const handleCopyHistory = () => {
    const textToCopy = commandHistory
      .map((item) => (item.type === 'system' ? item.text : `> ${item.cmd}`))
      .join('\n');
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    toast.success("Terminal log copied to clipboard! 📋");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="terminal" className="scroll-mt-24 relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-16 lg:pb-24">
      
      {/* Outer White & Green Terminal Card */}
      <div className="rounded-3xl bg-white border border-emerald-500/25 shadow-[0_20px_60px_rgba(16,185,129,0.08)] overflow-hidden">
        
        {/* Terminal Window Header Bar */}
        <div className="p-4 sm:p-5 bg-emerald-50/70 border-b border-emerald-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-gray-300 text-xs font-mono font-bold text-gray-700">
              <Terminal className="w-3.5 h-3.5 text-emerald-600" />
              <span>vivek@cyber-dev: ~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyHistory}
              className="p-1.5 rounded-lg bg-white border border-gray-200 hover:border-emerald-500 text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer shadow-xs"
              title="Copy terminal session"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => handleExecute('clear')}
              className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 hover:border-emerald-500 text-xs font-mono font-medium text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer shadow-xs"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Quick Command Suggestion Chips */}
        <div className="px-5 py-3 bg-gray-50/90 border-b border-gray-200 flex flex-wrap gap-2 items-center">
          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
            Quick Chips:
          </span>
          {quickCommands.map((q) => {
            const Icon = q.icon;
            return (
              <button
                key={q.label}
                onClick={() => handleExecute(q.cmd)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 text-xs font-mono font-semibold text-gray-700 hover:text-emerald-700 transition-all cursor-pointer shadow-xs"
              >
                <Icon className="w-3 h-3 text-emerald-600" />
                <span>{q.label}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal Screen Body */}
        <div className="p-5 sm:p-7 min-h-[300px] max-h-[460px] overflow-y-auto space-y-4 font-mono text-sm bg-white">
          {commandHistory.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.type === 'system' && (
                <div className="text-xs text-gray-500 leading-relaxed font-semibold">
                  {item.text}
                </div>
              )}
              {item.type === 'command' && (
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold">
                    <span>➜</span>
                    <span className="text-gray-900 font-semibold">{item.cmd}</span>
                  </div>
                  <div className="pl-4">
                    {item.output}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Command Input Bar */}
        <form onSubmit={handleFormSubmit} className="p-4 bg-gray-50/90 border-t border-gray-200 flex items-center gap-3">
          <span className="text-emerald-600 font-bold font-mono pl-2">➜</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder='Type command (e.g. "skills", "projects", "help")...'
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-gray-900 placeholder-gray-400"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 transition-all cursor-pointer shadow-sm"
          >
            <span>Execute</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>

      </div>

    </section>
  );
};

export default InteractiveTerminal;
