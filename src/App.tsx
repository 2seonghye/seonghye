import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, User } from "lucide-react";
import { ChatBot } from "./components/ChatBot";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 mix-blend-difference text-white">
    <div className="font-display text-xl font-bold tracking-tighter">LEE SEONG HYE</div>
    <div className="flex gap-8 text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white">
      {["Approach", "Experience", "Projects", "Education"].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:opacity-50 transition-opacity">
          {item}
        </a>
      ))}
    </div>
    <a href="#contact" className="hidden md:flex items-center gap-2 text-xs font-bold group text-white">
      연락하기 <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col justify-end">
    <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1497215842964-222925615a41?auto=format&fit=crop&q=80&w=2000"
        alt="Office space"
        className="w-full h-full object-cover grayscale brightness-50"
      />
      <div className="absolute top-1/2 left-8 -translate-y-1/2 max-w-xl text-white">
        <h2 className="text-sm font-medium mb-4 tracking-wide uppercase">
          마케팅 기획 · 실무 PM · 소셜 마케팅 · 광고 운영
        </h2>
        <p className="text-[10px] font-mono opacity-60 uppercase">Last Updated. 2022.09.28</p>
      </div>
    </div>

    <div className="px-6 py-12 bg-brand-bg relative z-10">
      <div className="flex justify-between items-end mb-12 text-brand-navy">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 bg-brand-navy rounded-full animate-pulse" />
          <p className="text-xs font-bold uppercase tracking-widest leading-tight">
            전략적 커뮤니케이션과 브랜딩의 가치를 창출합니다. <br /> 경계를 넘어 끊임없이 도전하는 마케터입니다.
          </p>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[16vw] leading-[0.8] font-accent font-black tracking-tighter text-brand-navy uppercase flex flex-col"
        >
          <span>SEONG</span>
          <span>HYE</span>
          <span className="text-outline">LEE</span>
        </motion.h1>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="approach" className="px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-24 text-brand-navy">
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-brand-navy rounded-full" />
        <span className="text-xs font-bold uppercase tracking-widest">Profile</span>
      </div>
      <h3 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter">
        브랜드에 생명력을 불어넣는 통합 마케팅 솔루션
      </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-24">
      {[
        { title: "실무 중심 PM", desc: "연간 운영 대행부터 대형 온/오프라인 프로모션까지, 실무 PM으로서 프로젝트의 전 과정을 밀도 있게 리드합니다." },
        { title: "브랜드 임팩트", desc: "쉐보레, LG, 올리브영 등 다양한 산업군의 파트너와 함께 브랜드 가치를 극대화하는 성과를 도출해왔습니다." },
        { title: "검증된 전문성", desc: "소셜 아이어워드 비주얼 혁신대상 및 자동차분야 대상 수상을 통해 디지털 커뮤니케이션 역량을 입증했습니다." }
      ].map((item) => (
        <div key={item.title} className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
          <p className="text-sm text-brand-navy/60 leading-relaxed font-medium">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Clients = () => {
  const brands = [
    "LG 시그니처 키친 스위트", "쉐보레", "올리브영", "요기요",
    "웨이브 (oksusu)", "SK브로드밴드", "롯데아울렛", "엘롯데", "윈체 WINCHE"
  ];
  
  return (
    <section className="bg-brand-navy text-brand-bg px-6 py-32">
      <div className="flex items-center gap-4 mb-24">
        <div className="w-2 h-2 bg-brand-bg rounded-full" />
        <span className="text-xs font-bold uppercase tracking-widest">Partner Brands</span>
      </div>
      
      <div className="mb-24">
        <h3 className="text-7xl md:text-9xl font-display leading-[0.8] tracking-tighter text-outline opacity-50 mb-4">leading stars</h3>
        <h3 className="text-7xl md:text-9xl font-display leading-[0.8] tracking-tighter">and startups.</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-8">
        {brands.map((brand) => (
          <div key={brand} className="flex items-center gap-2 group cursor-pointer">
            <div className="w-5 h-5 border border-brand-bg/30 group-hover:bg-brand-bg transition-colors" />
            <span className="text-sm font-semibold tracking-tight uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => (
  <section id="experience" className="px-6 py-32 text-brand-navy">
    <div className="mb-32">
      <motion.h3 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-[10vw] font-accent font-black leading-[0.8] tracking-tighter text-brand-navy py-12"
      >
        WORK<br />
        <span className="text-outline">EXPERIENCE</span>
      </motion.h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-24">
      {[
        { 
          company: "더볼트아이디어", 
          role: "기획팀 / 대리 (PM)", 
          period: "2019.02 - 2021.10",
          tasks: [
            "2021 LG 시그니처 키친 스위트 소셜 마케팅 연간 운영대행 PM",
            "2021 올리브영 온/오프 프로모션 ‘당근이세영? 올영갑니당!’ 팀원",
            "2019~2021 쉐보레 코리아 소셜 마케팅 연간 운영대행 PM",
            "2019 요기요 연말 프로모션 ‘잘먹었어, 올해도’ 팀원"
          ] 
        },
        { 
          company: "시너지에이앤씨", 
          role: "디지털 커뮤니케이션팀 / 대리 (PM)", 
          period: "2016.11 - 2018.11",
          tasks: [
            "2017~2018 oksusu(現 웨이브) 소셜 마케팅 연간 운영대행 PM",
            "2017~2018 SK브로드밴드 디지털 통합 마케팅 팀원",
            "2017 롯데아울렛 / 엘롯데 디지털 통합 마케팅 팀원",
            "2016~2018 윈체 WINCHE 디지털 통합 마케팅 팀원"
          ]
        }
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col gap-6 group">
          <div className="flex justify-between items-end border-b-2 border-brand-navy pb-4">
            <h4 className="text-3xl font-bold tracking-tighter font-display uppercase">
              {item.company}
            </h4>
            <span className="text-xs font-mono opacity-50 font-bold">{item.period}</span>
          </div>
          <p className="text-sm font-bold opacity-70 uppercase tracking-widest">{item.role}</p>
          <ul className="space-y-4">
            {item.tasks.map((task, tidx) => (
              <li key={tidx} className="text-sm text-brand-navy/80 leading-relaxed flex gap-3">
                <span className="opacity-30">•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="px-6 py-32 bg-gray-50 text-brand-navy">
     <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-2 bg-brand-navy rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest">Key Projects</span>
          </div>
          <h3 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter">
            대표 프로젝트<br />히스토리 및 성과
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-12 font-mono">
          <div><h4 className="text-5xl font-accent font-black">42+</h4><p className="text-[10px] uppercase font-bold tracking-widest opacity-50">Campaigns</p></div>
          <div><h4 className="text-5xl font-accent font-black">09+</h4><p className="text-[10px] uppercase font-bold tracking-widest opacity-50">Major Brands</p></div>
          <div><h4 className="text-5xl font-accent font-black">02</h4><p className="text-[10px] uppercase font-bold tracking-widest opacity-50">Grand Awards</p></div>
          <div><h4 className="text-5xl font-accent font-black">05Y</h4><p className="text-[10px] uppercase font-bold tracking-widest opacity-50">Agency Exp</p></div>
        </div>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "LG SIGNATURE", role: "연간 소셜 마케팅 운영 및 PM", year: "2021", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800" },
          { name: "CHEVROLET", role: "소셜 마케팅 리뉴얼 및 운영 PM", year: "2019-2021", img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" },
          { name: "OLIVE YOUNG", role: "온/오프 통합 프로모션 팀원", year: "2021", img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800" },
          { name: "YOGIYO", role: "연말 대형 프로모션 기획 및 운영", year: "2019", img: "https://raw.githubusercontent.com/2seonghye/seonghye/7663010ebcf1ed4aff484d76597b36a83e4ab3bc/1.jpg" },
          { name: "oksusu (wave)", role: "디지털 소셜 마케팅 PM", year: "2017-2018", video: "https://raw.githubusercontent.com/2seonghye/seonghye/60d6267c5436456c9a48056d81b03dc1637902f2/%EC%9D%B4%EC%84%B1%ED%98%9C.mp4" },
          { name: "SK Broadband", role: "디지털 통합 마케팅 운영", year: "2017-2018", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" }
        ].map((item) => (
          <div key={item.name} className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden mb-6 bg-brand-muted">
              {item.video ? (
                <video 
                  src={item.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
              ) : (
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
              )}
            </div>
            <div className="flex justify-between items-start px-2">
              <div>
                <h4 className="font-bold text-lg tracking-tight">{item.name}</h4>
                <p className="text-[10px] opacity-50 font-bold uppercase tracking-widest">{item.role}</p>
              </div>
              <span className="text-[10px] font-mono font-bold opacity-30">{item.year}</span>
            </div>
          </div>
        ))}
     </div>
  </section>
);

const AwardsEducation = () => (
    <section id="education" className="px-6 py-32 border-t border-brand-navy/10 text-brand-navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-2 bg-brand-navy rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest">Awards & Certs</span>
                </div>
                <div className="space-y-12">
                    {[
                        { title: "소셜 아이어워드 비주얼 혁신대상", project: "쉐보레 코리아 공식 인스타그램 (KIPFA)", date: "2019" },
                        { title: "소셜 아이어워드 자동차분야 대상", project: "쉐보레 트래버스 런칭 캠페인 (KIPFA)", date: "2020" },
                        { title: "GTQ (그래픽기술자격) 1급", project: "한국생산성본부 (KPC)", date: "2015" },
                        { title: "포토샵 사용 가능", project: "Adobe Creative Suite 숙련", date: "2015" }
                    ].map((award) => (
                        <div key={award.title} className="flex justify-between items-start border-b border-brand-navy/10 pb-8">
                            <div>
                                <h4 className="text-xl font-bold tracking-tight mb-2 uppercase">{award.title}</h4>
                                <p className="text-xs opacity-50 font-bold uppercase tracking-widest">{award.project}</p>
                            </div>
                            <span className="text-xs font-mono">{award.date}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-2 bg-brand-navy rounded-full" />
                    <span className="text-xs font-bold uppercase tracking-widest">Education</span>
                </div>
                <div className="space-y-12">
                     {[
                        { school: "서경대학교", major: "미용예술학과 / 졸업", date: "2008.03 - 2013.02" },
                        { school: "한성여자고등학교", major: "문과 / 졸업", date: "2005.03 - 2008.02" }
                    ].map((item) => (
                        <div key={item.school} className="flex justify-between items-start border-b border-brand-navy/10 pb-8">
                            <div>
                                <h4 className="text-xl font-bold tracking-tight mb-2 uppercase">{item.school}</h4>
                                <p className="text-xs opacity-50 font-bold uppercase tracking-widest">{item.major}</p>
                            </div>
                            <span className="text-xs font-mono">{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => (
  <section id="contact" className="px-6 py-32 bg-brand-navy text-brand-bg relative overflow-hidden">
    <div className="absolute top-0 right-0 p-12 opacity-10">
      <Mail size={400} strokeWidth={0.5} />
    </div>
    <div className="relative z-10">
      <h3 className="text-[12vw] font-accent font-black leading-[0.8] tracking-tighter mb-24">
        SAY HI<br />
        <span className="text-outline">FOR WORK</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
        <div className="space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Email</p>
            <a href="mailto:135352524@hanmail.net" className="text-4xl font-display tracking-tight hover:opacity-50 transition-opacity">
              135352524@hanmail.net
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-4">Phone</p>
            <a href="tel:01072900076" className="text-4xl font-display tracking-tight hover:opacity-50 transition-opacity">
              010-7290-0076
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            <p>© Seonghye Lee. All rights reserved.</p>
            <p>Built with Passion & Strategy.</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="px-6 py-32 bg-white text-brand-navy">
    <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-2 bg-brand-navy rounded-full" />
          <span className="text-xs font-bold uppercase tracking-widest">Testimonials</span>
        </div>
        <h3 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter">
          Don't just take our word<br />for it. Hear what partners<br />have to say about us
        </h3>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[
        { text: "연간 운영 PM으로서 탁월한 전략과 전문적인 실행력을 보여주셨습니다. 브랜드 가치가 크게 향상되었습니다.", author: "LG 시그니처 마케팅 담당자", role: "Manager" },
        { text: "소셜 미디어 채널의 비주얼과 퍼포먼스 모두를 만족시키는 드문 기획자입니다.", author: "쉐보레 코리아 브랜딩 팀", role: "Client" },
        { text: "복잡한 온/오프라인 프로모션 과정에서도 흔들림 없는 실무 PM 역량이 인상적이었습니다.", author: "올리브영 마케팅 기획팀", role: "Partner" },
        { text: "데이터 기반의 광고 운영과 크리에이티브한 기획력이 완벽하게 조화를 이룹니다.", author: "요기요 캠페인 실무자", role: "Senior Manager" }
      ].map((item, idx) => (
        <div key={idx} className="p-12 border border-brand-navy/5 bg-gray-50 flex flex-col justify-between">
          <p className="text-xl font-medium tracking-tight mb-12 italic opacity-80 leading-relaxed">"{item.text}"</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-muted rounded-full overflow-hidden flex items-center justify-center">
              <User size={20} className="text-brand-navy opacity-30" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-tight">{item.author}</p>
              <p className="text-[10px] opacity-50 uppercase font-bold tracking-widest">{item.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Experience />
      <Projects />
      <Testimonials />
      <AwardsEducation />
      <Contact />
      <ChatBot />
    </div>
  );
}
