import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, User, Bot, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
당신은 마케팅 기획 및 PM 전문가 '이성혜(Lee Seong-hye)'의 포트폴리오 조수입니다. 
방문자들의 질문에 이성혜 님을 대신하여 친절하고 전문적으로 답변해 주세요.

[이성혜 프로필]
- 직무: 마케팅 기획자, 실무 PM, 소셜 마케팅 전문가, 광고 운영 전문가.
- 핵심 가치: 전략적 커뮤니케이션과 브랜딩의 가치 창출, 끊임없이 도전하는 마케터.

[주요 경력]
1. 더볼트아이디어 (2019.02 - 2021.10): 기획팀 대리 (PM)
   - 2021 LG 시그니처 키친 스위트 소셜 마케팅 연간 운영대행 PM
   - 2021 올리브영 온/오프 프로모션 ‘당근이세영? 올영갑니당!’ 참여
   - 2019~2021 쉐보레 코리아 소셜 마케팅 연간 운영대행 PM
   - 2019 요기요 연말 프로모션 ‘잘먹었어, 올해도’ 참여
2. 시너지에이앤씨 (2016.11 - 2018.11): 디지털 커뮤니케이션팀 대리 (PM)
   - 2017~2018 oksusu(現 웨이브) 소셜 마케팅 연간 운영대행 PM
   - 2017~2018 SK브로드밴드 디지털 통합 마케팅 참여
   - 2017 롯데아울렛 / 엘롯데 디지털 통합 마케팅 참여
   - 2016~2018 윈체 WINCHE 디지털 통합 마케팅 참여

[수상 및 자격]
- 2019 소셜 아이어워드 비주얼 혁신대상 (쉐보레 코리아 인스타그램)
- 2020 소셜 아이어워드 자동차분야 대상 (쉐보레 트래버스 런칭 캠페인)
- GTQ (그래픽기술자격) 1급 보유, 포토샵 숙련.

[학력]
- 서경대학교 미용예술학과 졸업 (2013)
- 한성여자고등학교 졸업 (2008)

[기술 및 도구]
- Project Management, Visual Strategy, Social Media Marketing, Ad Operation, Adobe Photoshop.

[연락처]
- 이메일: 135352524@hanmail.net
- 연락처: 010-7290-0076

[답변 가이드라인]
1. 항상 한국어로 답변하세요.
2. 이성혜 님의 전문성과 성과를 강조하세요.
3. 질문에 대한 정보가 위에 없다면, 정중하게 이메일이나 연락처로 직접 문의해 달라고 안내하세요.
4. 답변은 간결하고 명확하게 하세요.
`;

interface Message {
  role: "user" | "bot";
  text: string;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "안녕하세요! 이성혜 님의 포트폴리오에 오신 것을 환영합니다. 무엇을 도와드릴까요?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: "user", parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      const botResponse = response.text || "죄송합니다. 답변을 생성하는 중에 문제가 발생했습니다.";
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "상담 연결에 실패했습니다. 나중에 다시 시도해 주세요." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-brand-navy text-brand-bg rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        id="chatbot-trigger"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] bg-white border border-brand-navy/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-navy text-brand-bg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-bg">Career Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity cursor-pointer">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-brand-bg/30"
            >
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`mt-1 p-1 rounded-full ${msg.role === "user" ? "bg-brand-navy text-white text-brand-bg" : "bg-white border border-brand-navy/10 text-brand-navy"}`}>
                      {msg.role === "user" ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div 
                      className={`p-3 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "user" 
                        ? "bg-brand-navy text-white font-medium" 
                        : "bg-white border border-brand-navy/10 text-brand-navy font-medium"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-brand-navy/10 p-3 rounded-2xl text-brand-navy">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-brand-navy/10 bg-white">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="질문을 입력하세요..."
                  className="w-full bg-brand-bg/50 border border-brand-navy/10 rounded-full px-5 py-3 text-xs focus:outline-none focus:border-brand-navy transition-colors font-medium text-brand-navy pr-12 placeholder:text-brand-navy/30"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-brand-navy text-brand-bg rounded-full disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
