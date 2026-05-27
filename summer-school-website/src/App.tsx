import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

const WHATSAPP_LINK = "https://wa.me/38348108128";
const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwiXTSXiuef3ySqucI8OAnxwNcTUrS_9rbWhdJAIwvxhYBVJWXjb6xBGpOYne3Us3pkKA/exec";

type Page = "home" | "programs";

type PlanProgram = {
  icon: string;
  color: string;
  title: string;
  image: string;
  description: string;
  fullDetails: string[];
};

const heroAlbumImages = [
  "/images/pic13.jpg",
   "/images/hero-kids.png",
  "/images/pic2.jpg",
  "/images/pic4.jpg",
  "/images/foto2.PNG",
  "/images/foto3.PNG",
  "/images/fotoja.png"

];

const carouselItems = [
  { icon: "🤖", title: "Robotikë", color: "bg-[#009FE3]" },
  { icon: "⚙️", title: "Inxhinieri", color: "bg-[#78BE20]" },
  { icon: "💻", title: "Kodim", color: "bg-[#F6C400]" },
  { icon: "🧠", title: "AI", color: "bg-[#E30613]" },
  { icon: "🧪", title: "Science", color: "bg-[#009FE3]" },
  { icon: "🖨️", title: "3D Print", color: "bg-[#78BE20]" },
  { icon: "🌿", title: "Eksplorim", color: "bg-[#F6C400]" },
  { icon: "🚀", title: "Projects", color: "bg-[#E30613]" },
];

const mainPrograms = [
  {
    title: "Programi Mujor",
    subtitle: "Gjatë gjithë muajit Korrik",
    color: "bg-[#009FE3]",
    icon: "📚",
    image: "/images/pic1.jpg",
    description:
      "Program edukativ dhe argëtues gjatë gjithë muajit Korrik, nga e Hëna deri të Premten, me nga 2 orë aktivitete në ditë.",
    details: [
      "E Hënë – E Premte",
      "2 orë në ditë",
      "Gjatë gjithë muajit Korrik",
      "Për moshat 4–15 vjeç",
    ],
    price: "79€",
    discountPrice: "59€",
    priceNote: "Oferta Early Bird",
  },
  {
    title: "Kampi Tërëditor",
    subtitle: "6 Korrik – 17 Korrik",
    color: "bg-[#78BE20]",
    icon: "🏕️",
    image: "/images/stem-camp.png",
    description:
      "Kamp tërëditor ku fëmijët përfshihen në aktivitete praktike, edukative dhe eksploruese prej mëngjesit deri pasdite.",
    details: [
      "6 Korrik – 17 Korrik",
      "08:30 – 16:30",
      "Robotikë, AI, Kodim, Science",
      "Eksplorim i natyrës",
    ],
    price: "119€/javë",
    discountPrice: "99€/javë",
    priceNote: "Oferta Early Bird",
  },
];

const planPrograms: PlanProgram[] = [
  {
    icon: "🤖",
    color: "bg-[#009FE3]",
    title: "Robotikë & Inxhinieri",
    image: "/images/pic1.jpg",
    description:
      "Fëmijët mësojnë si funksionojnë robotët, mekanizmat dhe sistemet inxhinierike përmes ndërtimit dhe testimit praktik.",
    fullDetails: [
      "Fëmijët njihen me konceptet bazë të robotikës përmes aktiviteteve praktike dhe të kuptueshme për moshën e tyre.",
      "Ata ndërtojnë modele, testojnë si funksionojnë pjesët mekanike dhe mësojnë pse një strukturë duhet të jetë e qëndrueshme.",
      "Përmes sfidave ekipore, fëmijët mësojnë të provojnë, të gabojnë, të përmirësojnë dhe të gjejnë zgjidhje kreative.",
      "Ky modul zhvillon mendimin logjik, durimin, bashkëpunimin dhe aftësinë për të zgjidhur probleme reale.",
    ],
  },
  {
    icon: "💻",
    color: "bg-[#78BE20]",
    title: "AI & Kodim",
    image: "/images/fotoja.png",
    description:
      "Nxënësit njihen me kodimin dhe konceptet bazë të inteligjencës artificiale në mënyrë të thjeshtë, argëtuese dhe praktike.",
    fullDetails: [
      "Fëmijët mësojnë bazat e kodimit përmes shembujve të thjeshtë, lojërave logjike dhe aktiviteteve kreative.",
      "Ata kuptojnë se programimi është dhënie e udhëzimeve hap pas hapi për kompjuterin.",
      "Në pjesën e AI, fëmijët njihen me idenë se si kompjuteri mund të mësojë nga të dhënat dhe të marrë vendime.",
      "Qëllimi nuk është vetëm të shkruajnë kod, por të zhvillojnë mendim algoritmik dhe kreativ.",
    ],
  },
  {
    icon: "🧪",
    color: "bg-[#F6C400]",
    title: "Science Experiments",
    image: "/images/pic11.jpg",
    description:
      "Fëmijët eksplorojnë shkencën përmes eksperimenteve të sigurta, vëzhgimit dhe diskutimit.",
    fullDetails: [
      "Ky modul i ndihmon fëmijët ta shohin shkencën si diçka praktike dhe argëtuese.",
      "Fëmijët marrin pjesë në eksperimente të thjeshta dhe të sigurta, ku vëzhgojnë çfarë ndodh dhe pse ndodh.",
      "Ata mësojnë të bëjnë pyetje, të parashikojnë rezultate dhe të diskutojnë përfundimet.",
      "Moduli zhvillon kuriozitetin, vëmendjen dhe mënyrën shkencore të të menduarit.",
    ],
  },
  {
    icon: "🖨️",
    color: "bg-[#E30613]",
    title: "3D Design & Print",
    image: "/images/pic10.jpg",
    description:
      "Fëmijët mësojnë si idetë digjitale mund të kthehen në modele dhe objekte reale përmes dizajnit 3D.",
    fullDetails: [
      "Fëmijët njihen me konceptin e dizajnit 3D dhe mënyrën si krijohen objektet në hapësirë digjitale.",
      "Ata mësojnë si një ide mund të shndërrohet në model dhe pastaj në objekt real.",
      "Ky modul i ndihmon fëmijët të kuptojnë format, madhësitë, strukturën dhe procesin kreativ.",
      "Aktiviteti zhvillon imagjinatën, kreativitetin dhe mendimin hapësinor.",
    ],
  },
];

const benefits = [
  "Për moshat 4–15 vjeç",
  "Mësim praktik dhe argëtues",
  "Robotikë & Inxhinieri",
  "AI & Kodim",
  "Science Experiments",
  "3D Design & Print",
  "Aktivitete kreative",
  "Eksplorim i natyrës",
];

const galleryImages = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
  "/images/pic5.jpg",
  "/images/pic6.jpg",
  "/images/pic7.jpg",
  "/images/pic8.jpg",
  "/images/pic9.jpg",
  "/images/pic10.jpg",
  "/images/pic11.jpg",
  "/images/pic12.jpg",
  "/images/pic13.jpg",
  "/images/pic14.jpg",
  "/images/foto2.PNG",
  "/images/foto3.PNG",
  "/images/fotoja.png",
];



const faqs = [
  {
    question: "Për cilat mosha është Summer School?",
    answer:
      "Programi është për fëmijë të moshave 4–15 vjeç. Aktivitetet përshtaten sipas moshës dhe nivelit të fëmijëve.",
  },
  {
    question: "Sa zgjat programi mujor?",
    answer:
      "Programi mujor mbahet gjatë gjithë muajit Korrik, nga e Hëna deri të Premten, me nga 2 orë aktivitete në ditë.",
  },
  {
    question: "Kur mbahet kampi tërëditor?",
    answer:
      "Kampi tërëditor mbahet prej 6 Korrik deri më 17 Korrik, nga ora 08:30 deri në 16:30.",
  },
  {
    question: "Çka mësojnë fëmijët?",
    answer:
      "Fëmijët mësojnë robotikë, inxhinieri, AI, kodim, eksperimente shkencore, 3D Design & Print dhe aktivitete kreative.",
  },
  {
    question: "Si mund të regjistrohem?",
    answer:
      "Mund të klikoni butonin 'Regjistrohu tani' ose të na shkruani direkt në WhatsApp për më shumë informata.",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  function openProgramsPage() {
    setCurrentPage("programs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openRegistrationForm() {
    setIsRegistrationOpen(true);
  }

  function closeRegistrationForm() {
    setIsRegistrationOpen(false);
  }

  if (currentPage === "programs") {
    return (
      <main className="min-h-screen overflow-x-hidden bg-white text-[#1F2933]">
        <Navbar onGoHome={goHome} onOpenRegistration={openRegistrationForm} />

        <PlanProgramsPage
          onBack={goHome}
          onOpenRegistration={openRegistrationForm}
        />

        <Footer />
        <WhatsAppFloat />

        {isRegistrationOpen && (
          <RegistrationModal onClose={closeRegistrationForm} />
        )}
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#1F2933]">
      <Navbar onOpenRegistration={openRegistrationForm} />
      <Hero />
      <TechCarousel />
      <DiscountCountdown onOpenRegistration={openRegistrationForm} />
      <About />

      <Programs
        onOpenProgramsPage={openProgramsPage}
        onOpenRegistration={openRegistrationForm}
      />

      <Gallery />
      <WhyJoin />
     
      <FAQ />
      <Register onOpenRegistration={openRegistrationForm} />
      <Contact />
      <Footer />
      <WhatsAppFloat />

      {isRegistrationOpen && (
        <RegistrationModal onClose={closeRegistrationForm} />
      )}
    </main>
  );
}

function BackgroundShapes({
  variant = "mixed",
}: {
  variant?: "mixed" | "blue" | "green" | "yellow" | "red";
}) {
  const shapes =
    variant === "blue"
      ? ["🤖", "⚙️", "💻", "🧩", "🔧", "🚀", "📘", "🛰️"]
      : variant === "green"
      ? ["🌿", "🧪", "⚙️", "🧠", "🔬", "✨", "🌱", "🧬"]
      : variant === "yellow"
      ? ["💡", "🚀", "🧩", "⭐", "🎯", "📚", "✨", "🔆"]
      : variant === "red"
      ? ["🚀", "🎯", "🧠", "💡", "🧩", "🔥", "⭐", "📌"]
      : ["🤖", "💻", "🧪", "🧩", "⚙️", "🚀", "💡", "🔬"];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-4 top-10 text-5xl opacity-10 sm:left-8 sm:text-7xl">
        {shapes[0]}
      </div>

      <div className="absolute right-4 top-24 text-5xl opacity-10 sm:right-10 sm:text-7xl">
        {shapes[1]}
      </div>

      <div className="absolute bottom-16 left-6 hidden text-5xl opacity-10 sm:left-16 sm:block sm:text-6xl">
        {shapes[2]}
      </div>

      <div className="absolute bottom-10 right-8 hidden text-5xl opacity-10 sm:right-24 sm:block sm:text-6xl">
        {shapes[3]}
      </div>

      <div className="absolute left-1/2 top-16 hidden -translate-x-1/2 text-6xl opacity-10 md:block">
        {shapes[4]}
      </div>

      <div className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 text-6xl opacity-10 md:block">
        {shapes[5]}
      </div>

      <div className="absolute left-1/4 top-1/2 hidden text-5xl opacity-10 lg:block">
        {shapes[6]}
      </div>

      <div className="absolute right-1/4 bottom-1/3 hidden text-5xl opacity-10 lg:block">
        {shapes[7]}
      </div>

      <div className="absolute -left-20 top-1/3 h-56 w-56 rounded-full bg-[#009FE3]/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute -right-20 bottom-1/4 h-56 w-56 rounded-full bg-[#F6C400]/20 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute left-1/3 bottom-0 h-44 w-44 rounded-full bg-[#78BE20]/10 blur-3xl sm:h-56 sm:w-56" />
      <div className="absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-[#E30613]/10 blur-3xl sm:h-52 sm:w-52" />
    </div>
  );
}

function Navbar({
  onGoHome,
  onOpenRegistration,
}: {
  onGoHome?: () => void;
  onOpenRegistration: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
  ];

  function handleLogoClick() {
    setIsMenuOpen(false);
    onGoHome?.();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex min-w-0 items-center gap-3"
        >
          <div className="h-14 w-14 shrink-0 sm:h-20 sm:w-20">
            <img
              src="/images/logo.jpg"
              alt="Young Engineers Prishtina"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-black leading-none sm:text-lg">
              Young Engineers Prishtina
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#009FE3] sm:text-xs">
              Summer School 2026
            </p>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-2xl font-black text-[#1F2933] shadow-sm md:hidden"
          aria-label="Open menu"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#009FE3]"
            >
              {link.label}
            </a>
          ))}

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-[#1db954]"
          >
            WhatsApp
          </a>

          <button
            type="button"
            onClick={onOpenRegistration}
            className="rounded-full bg-[#009FE3] px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-[#0087c2]"
          >
            Register Now
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="grid gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#25D366] px-4 py-3 text-center text-sm font-black text-white"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                onOpenRegistration();
              }}
              className="rounded-2xl bg-[#009FE3] px-4 py-3 text-center text-sm font-black text-white"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function FloatingHeroElements() {
  return (
    <>
      <div className="float-element absolute left-8 top-28 hidden h-20 w-20 rounded-full bg-[#009FE3]/15 md:block" />
      <div className="float-element-slow absolute right-16 top-32 hidden h-28 w-28 rounded-full bg-[#78BE20]/15 md:block" />
      <div className="float-element-fast absolute bottom-20 left-1/3 hidden h-16 w-16 rounded-full bg-[#F6C400]/25 md:block" />
      <div className="float-element absolute bottom-28 right-1/4 hidden h-14 w-14 rounded-full bg-[#E30613]/15 md:block" />

      <div className="float-element absolute left-12 bottom-24 hidden rotate-12 rounded-3xl bg-white p-4 text-3xl shadow-xl md:block">
        💻
      </div>

      <div className="float-element-slow absolute right-12 bottom-36 hidden -rotate-12 rounded-3xl bg-white p-4 text-3xl shadow-xl md:block">
        🧩
      </div>

      <div className="float-element-fast absolute right-1/3 top-36 hidden rounded-3xl bg-white p-4 text-3xl shadow-xl md:block">
        ⚙️
      </div>

      <div className="float-element absolute left-1/4 top-48 hidden rounded-3xl bg-white p-4 text-3xl shadow-xl md:block">
        🤖
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="engineering-grid relative overflow-hidden bg-gradient-to-br from-white via-[#F7FBFF] to-[#EAF7FF]">
      <FloatingHeroElements />
      <BackgroundShapes variant="mixed" />

      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#009FE3]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[#78BE20]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#009FE3]/20 bg-white px-4 py-2 text-sm font-bold text-[#009FE3] shadow-sm">
            🚀 Summer School 2026
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            <span className="text-[#009FE3] drop-shadow-sm">Teknologji</span>,{" "}
            <span className="text-[#78BE20] drop-shadow-sm">kreativitet</span>{" "}
            dhe{" "}
            <span className="text-[#F6C400] drop-shadow-sm">argëtim</span> për{" "}
            <span className="text-[#1F2933]">fëmijë.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Program veror për moshat 4–15 vjeç, ku fëmijët mësojnë dhe
            argëtohen përmes Robotikës, Inxhinierisë, AI, Kodimit, Science
            Experiments, 3D Design & Print dhe aktiviteteve eksploruese.
          </p>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
            <Stat number="Korrik" label="Programi" color="text-[#009FE3]" />
            <Stat number="4–15" label="Mosha" color="text-[#78BE20]" />
            <Stat number="59€" label="Prej" color="text-[#E30613]" />
          </div>
        </div>

        <HeroPhotoAlbum />
      </div>
    </section>
  );
}

function HeroPhotoAlbum() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previousImage) =>
        previousImage === heroAlbumImages.length - 1 ? 0 : previousImage + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="image-card-shadow relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl sm:p-4">
        <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] bg-slate-100 sm:h-[440px] lg:h-[520px]">
          {heroAlbumImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Summer school activity ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                index === currentImage
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#009FE3] shadow-lg backdrop-blur sm:left-5 sm:top-5 sm:px-5 sm:text-sm">
            📸 Summer Album
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
            <p className="text-xs font-black uppercase tracking-wider text-[#009FE3] sm:text-sm">
              Summer School 2026
            </p>

            <h2 className="mt-1 text-xl font-black text-[#1F2933] sm:text-2xl">
              Mëso. Krijo. Eksploro.
            </h2>

            <p className="mt-2 text-xs font-semibold leading-5 text-slate-600 sm:text-sm sm:leading-6">
              Nga rreshtat e parë të kodit deri te projektet kreative, këtu
              ruhen momentet ku fëmijët mësojnë, eksperimentojnë dhe krijojnë
              me entuziazëm.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {heroAlbumImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentImage
                      ? "w-8 bg-[#009FE3]"
                      : "w-3 bg-slate-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="float-element absolute -right-2 -top-4 rounded-2xl bg-[#F6C400] px-4 py-2 text-sm font-black text-[#1F2933] shadow-xl sm:-right-4 sm:px-5 sm:py-3 sm:text-base">
        Early Bird!
      </div>

      <div className="float-element-slow absolute -left-4 top-20 hidden rounded-full bg-[#78BE20] p-4 text-2xl shadow-xl sm:block">
        ⚙️
      </div>

      <div className="float-element-fast absolute -right-4 bottom-24 hidden rounded-full bg-[#E30613] p-4 text-2xl shadow-xl sm:block">
        🚀
      </div>
    </div>
  );
}

function TechCarousel() {
  const repeatedItems = [...carouselItems, ...carouselItems];

  return (
    <section className="border-y border-slate-200 bg-white py-5 sm:py-6">
      <div className="carousel-mask overflow-hidden">
        <div className="carousel-track flex w-max gap-4 px-4 sm:gap-5 sm:px-5">
          {repeatedItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex min-w-[180px] items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-sm sm:min-w-[220px] sm:gap-4 sm:p-4"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-2xl ${item.color} text-2xl sm:h-14 sm:w-14 sm:text-3xl`}
              >
                {item.icon}
              </div>

              <p className="text-base font-black sm:text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscountCountdown({
  onOpenRegistration,
}: {
  onOpenRegistration: () => void;
}) {
  const discountEndDate = useMemo(
    () => new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
    []
  );

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = discountEndDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [discountEndDate]);

  return (
    <section className="relative overflow-hidden bg-[#1F2933] px-4 py-8 text-white sm:px-6">
      <BackgroundShapes variant="red" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <div className="inline-flex rounded-full bg-[#E30613] px-4 py-2 text-sm font-black text-white">
            Early Bird Discount
          </div>

          <h2 className="mt-3 text-2xl font-black md:text-3xl">
            Zbritje për regjistrimet e hershme
          </h2>

          <p className="mt-1 text-sm leading-6 text-white/70 sm:text-base">
            Përfito zbritje deri në 25% për regjistrimet e hershme në programin
            mujor dhe kampin tërëditor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
          <CountdownBox
            number={timeLeft.days}
            label="Ditë"
            color="bg-[#009FE3]"
          />
          <CountdownBox
            number={timeLeft.hours}
            label="Orë"
            color="bg-[#78BE20]"
          />
          <CountdownBox
            number={timeLeft.minutes}
            label="Min"
            color="bg-[#F6C400]"
          />
          <CountdownBox
            number={timeLeft.seconds}
            label="Sek"
            color="bg-[#E30613]"
          />
        </div>

        <button
          type="button"
          onClick={onOpenRegistration}
          className="w-full rounded-full bg-[#F6C400] px-8 py-4 text-center font-black text-[#1F2933] shadow-lg transition hover:bg-yellow-300 sm:w-auto"
        >
          Rezervo tani
        </button>
      </div>
    </section>
  );
}

function CountdownBox({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-3">
      <div
        className={`grid h-14 w-14 place-items-center rounded-xl ${color} text-xl font-black text-white sm:h-16 sm:w-16 sm:text-2xl`}
      >
        {number}
      </div>

      <p className="mt-2 text-xs font-black uppercase text-white/60">{label}</p>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20"
    >
      <BackgroundShapes variant="yellow" />

      <div className="relative grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            About us
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Një program veror ku fëmijët mësojnë duke krijuar.
          </h2>

          <div className="mt-6 space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            <p>
              Te Summer School, fëmijët nuk janë vetëm pjesëmarrës — ata janë
              krijues të vegjël që eksplorojnë teknologjinë, robotikën, kodimin,
              eksperimentet dhe aktivitetet kreative në mënyrë argëtuese.
            </p>

            <p>
              Përmes lojës, punës në grup dhe projekteve praktike, ata mësojnë
              të mendojnë më lirshëm, të zgjidhin probleme, të shprehin idetë e
              tyre dhe të ndërtojnë vetëbesim në çdo hap.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#F6C400]/30 blur-xl" />
          <div className="absolute -bottom-4 -left-4 h-28 w-28 rounded-full bg-[#009FE3]/20 blur-xl" />

          <img
            src="/images/pic7.jpg"
            alt="Fëmijë duke mësuar përmes teknologjisë dhe aktiviteteve kreative"
            className="relative h-full min-h-[260px] w-full rounded-[1.5rem] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function PlanProgramsPage({
  onBack,
  onOpenRegistration,
}: {
  onBack: () => void;
  onOpenRegistration: () => void;
}) {
  const [selectedProgram, setSelectedProgram] = useState<PlanProgram | null>(
    null
  );

  function handleProgramRegistration() {
    setSelectedProgram(null);
    onOpenRegistration();
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-14 text-[#1F2933] sm:py-20">
      <BackgroundShapes variant="mixed" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <button
          type="button"
          onClick={onBack}
          className="mb-8 rounded-full border-2 border-[#009FE3] bg-white px-5 py-3 text-sm font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white sm:px-6"
        >
          ← Kthehu te faqja kryesore
        </button>

        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
            Planprogramet
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Çka përfshihet në programet tona?
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Këtu mund të shihni më shumë detaje rreth aktiviteteve që fëmijët
            do t’i zhvillojnë gjatë Summer School 2026.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
          {planPrograms.map((program) => (
            <PlanProgramCard
              key={program.title}
              {...program}
              onLearnMore={() => setSelectedProgram(program)}
            />
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1F2933]/60 px-3 py-5 backdrop-blur-sm sm:px-4 sm:py-8">
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl sm:rounded-[2.5rem]">
            <div className={`h-4 ${selectedProgram.color}`} />

            <button
              type="button"
              onClick={() => setSelectedProgram(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-xl font-black text-slate-700 transition hover:bg-[#E30613] hover:text-white sm:right-5 sm:top-5 sm:h-11 sm:w-11"
              aria-label="Mbyll"
            >
              ×
            </button>

            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:p-10">
              <div className="overflow-hidden rounded-[2rem] bg-slate-100">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="h-[240px] w-full object-cover sm:h-[320px] lg:h-full lg:min-h-[360px]"
                />
              </div>

              <div>
                <div
                  className={`grid h-16 w-16 place-items-center rounded-3xl ${selectedProgram.color} text-3xl sm:h-20 sm:w-20 sm:text-4xl`}
                >
                  {selectedProgram.icon}
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#009FE3] sm:text-sm sm:tracking-[0.3em]">
                  Detajet e planprogramit
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  {selectedProgram.title}
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  {selectedProgram.description}
                </p>

                <div className="mt-7 grid gap-3">
                  {selectedProgram.fullDetails.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold leading-6 text-slate-600 sm:px-5 sm:py-4 sm:leading-7"
                    >
                      ✅ {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setSelectedProgram(null)}
                    className="rounded-full border-2 border-[#009FE3] bg-white px-7 py-4 text-center font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white"
                  >
                    ← Kthehu mbrapa
                  </button>

                  <button
                    type="button"
                    onClick={handleProgramRegistration}
                    className="rounded-full bg-[#E30613] px-7 py-4 text-center font-black text-white transition hover:bg-red-700"
                  >
                    Regjistrohu tani
                  </button>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[#25D366] px-7 py-4 text-center font-black text-white transition hover:bg-[#1db954]"
                  >
                    Pyet në WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PlanProgramCard({
  icon,
  color,
  title,
  image,
  description,
  onLearnMore,
}: PlanProgram & { onLearnMore: () => void }) {
  return (
    <div className="card-hover group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className={`h-3 ${color}`} />

      <div className="h-40 overflow-hidden sm:h-48 lg:h-52">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div
          className={`grid h-12 w-12 place-items-center rounded-2xl ${color} text-2xl sm:h-14 sm:w-14 sm:text-3xl`}
        >
          {icon}
        </div>

        <h3 className="mt-4 text-lg font-black sm:text-xl">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-sm sm:leading-7">
          {description}
        </p>

        
        <button
          type="button"
          onClick={onLearnMore}
          className="mt-5 w-full rounded-full bg-[#009FE3] px-6 py-3 text-center text-sm font-black text-white transition hover:bg-[#0087c2]"
        >
          Mëso më shumë
        </button>
      </div>
    </div>
  );
}

function Programs({
  onOpenProgramsPage,
  onOpenRegistration,
}: {
  onOpenProgramsPage: () => void;
  onOpenRegistration: () => void;
}) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-slate-50 py-14 text-[#1F2933] sm:py-20"
    >
      <BackgroundShapes variant="mixed" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
            Programs
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Zgjidh programin
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {mainPrograms.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
              onOpenProgramsPage={onOpenProgramsPage}
              onOpenRegistration={onOpenRegistration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  title,
  subtitle,
  color,
  icon,
  image,
  description,
  details,
  price,
  discountPrice,
  priceNote,
  onOpenProgramsPage,
  onOpenRegistration,
}: {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
  image: string;
  description: string;
  details: string[];
  price: string;
  discountPrice: string;
  priceNote: string;
  onOpenProgramsPage: () => void;
  onOpenRegistration: () => void;
}) {
  return (
    <div className="card-hover group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className={`h-3 ${color}`} />

      <div className="h-44 overflow-hidden sm:h-52 lg:h-56">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-slate-500 sm:text-sm">
              {subtitle}
            </p>

            <h3 className="mt-2 text-xl font-black sm:text-2xl">{title}</h3>
          </div>

          <div
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${color} text-2xl sm:h-14 sm:w-14 sm:text-3xl`}
          >
            {icon}
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-sm sm:leading-7">
          {description}
        </p>

        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail}
              className="rounded-xl bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 sm:text-sm"
            >
              ✅ {detail}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500 sm:text-sm">
            Çmimi
          </p>

          <div className="mt-2 flex flex-wrap items-end gap-3">
            <p className="text-2xl font-black text-[#E30613] sm:text-3xl">
              {discountPrice}
            </p>

            <p className="pb-1 text-sm font-bold text-slate-400 line-through sm:text-base">
              {price}
            </p>
          </div>

          <p className="mt-2 text-sm font-bold text-slate-600">{priceNote}</p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={onOpenRegistration}
            className="block rounded-full bg-[#009FE3] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#0087c2]"
          >
            Regjistrohu
          </button>

          <button
            type="button"
            onClick={onOpenProgramsPage}
            className="block rounded-full border-2 border-[#009FE3] bg-white px-5 py-3 text-center text-sm font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white"
          >
            Programet
          </button>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function goToPreviousImage() {
    setActiveImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }

  function goToNextImage() {
    setActiveImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-slate-50 py-14 sm:py-20"
    >
      <BackgroundShapes variant="yellow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            Gallery
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Momente nga aktivitetet
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-3 shadow-sm sm:mt-12 sm:p-4">
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
              {galleryImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    index === activeImage
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                />
              ))}

              <div className="h-[320px] sm:h-[430px] lg:h-[560px]" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-[#009FE3] shadow-md sm:left-5 sm:top-5 sm:px-5 sm:text-sm">
                📸 Summer School Moments
              </div>

              <button
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-[#1F2933] shadow-lg transition hover:bg-white sm:left-5 sm:h-12 sm:w-12"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-[#1F2933] shadow-lg transition hover:bg-white sm:right-5 sm:h-12 sm:w-12"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] bg-slate-50 p-5 sm:p-6">
              <div>
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#E30613] shadow-sm">
                  Aktiviteti {activeImage + 1} / {galleryImages.length}
                </div>

                <h3 className="mt-6 text-2xl font-black leading-tight text-[#1F2933] sm:text-3xl">
                  Atmosferë, kreativitet dhe argëtim
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600 sm:leading-8">
                  Fëmijët mësojnë, krijojnë dhe argëtohen përmes eksperiencave
                  praktike, aktiviteteve edukative, punës në grup dhe
                  projekteve kreative.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`h-3 rounded-full transition-all ${
                        index === activeImage
                          ? "w-10 bg-[#009FE3]"
                          : "w-3 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to gallery image ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    onClick={goToPreviousImage}
                    className="rounded-full border-2 border-slate-200 bg-white px-5 py-3 font-black text-slate-700 transition hover:border-[#009FE3] hover:text-[#009FE3]"
                  >
                    Previous
                  </button>

                  <button
                    onClick={goToNextImage}
                    className="rounded-full bg-[#009FE3] px-5 py-3 font-black text-white transition hover:bg-[#0087c2]"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="relative overflow-hidden bg-[#009FE3] py-14 sm:py-20">
      <BackgroundShapes variant="blue" />

      <div className="relative mx-auto max-w-7xl px-4 text-white sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/80">
              Why join?
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Më shumë se vetëm një aktivitet veror.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="card-hover rounded-3xl bg-white p-5 font-black text-[#1F2933] shadow-sm"
              >
                ✅ {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function FAQ() {
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFaq((current) =>
        current === faqs.length - 1 ? 0 : current + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  function goToPreviousFaq() {
    setActiveFaq((current) =>
      current === 0 ? faqs.length - 1 : current - 1
    );
  }

  function goToNextFaq() {
    setActiveFaq((current) =>
      current === faqs.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-slate-50 py-14 sm:py-20"
    >
      <BackgroundShapes variant="yellow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Pyetjet më të shpeshta
          </h2>
        </div>

        <div className="relative mx-auto mt-12 flex min-h-[330px] max-w-5xl items-center justify-center sm:min-h-[360px]">
          {faqs.map((faq, index) => {
            const offset =
              (index - activeFaq + faqs.length) % faqs.length;

            let positionClass =
              "pointer-events-none scale-75 opacity-0 translate-x-0 translate-y-0 z-0";

            if (offset === 0) {
              positionClass =
                "z-30 scale-100 opacity-100 translate-x-0 translate-y-0";
            } else if (offset === 1) {
              positionClass =
                "z-20 scale-90 opacity-45 translate-x-[42%] translate-y-5";
            } else if (offset === faqs.length - 1) {
              positionClass =
                "z-20 scale-90 opacity-45 -translate-x-[42%] translate-y-5";
            } else if (offset === 2) {
              positionClass =
                "z-10 scale-80 opacity-20 translate-x-[68%] translate-y-10";
            } else if (offset === faqs.length - 2) {
              positionClass =
                "z-10 scale-80 opacity-20 -translate-x-[68%] translate-y-10";
            }

            return (
              <div
                key={faq.question}
                className={`absolute w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl transition-all duration-700 ease-in-out sm:p-8 ${positionClass}`}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6C400] text-2xl shadow-sm">
                  ❓
                </div>

                <h3 className="text-xl font-black leading-tight text-[#1F2933] sm:text-2xl">
                  {faq.question}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  {faq.answer}
                </p>
              </div>
            );
          })}

          <button
            type="button"
            onClick={goToPreviousFaq}
            className="absolute left-0 z-40 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-[#1F2933] shadow-lg transition hover:bg-[#009FE3] hover:text-white sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous FAQ"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goToNextFaq}
            className="absolute right-0 z-40 grid h-11 w-11 place-items-center rounded-full bg-white text-2xl font-black text-[#1F2933] shadow-lg transition hover:bg-[#009FE3] hover:text-white sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next FAQ"
          >
            ›
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {faqs.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveFaq(index)}
              className={`h-3 rounded-full transition-all ${
                index === activeFaq
                  ? "w-10 bg-[#009FE3]"
                  : "w-3 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to FAQ ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Register({
  onOpenRegistration,
}: {
  onOpenRegistration: () => void;
}) {
  return (
    <section
      id="register"
      className="relative mx-auto max-w-7xl overflow-hidden px-4 py-14 sm:px-6 sm:py-20"
    >
      <BackgroundShapes variant="red" />

      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F6C400] text-[#1F2933]">
        <div className="absolute right-8 top-8 text-7xl opacity-20">🚀</div>
        <div className="absolute bottom-8 left-8 text-7xl opacity-20">💻</div>

        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
              Registration
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Regjistro fëmijën për Summer School 2026
            </h2>

            <p className="mt-5 text-base leading-7 sm:text-lg sm:leading-8">
              Plotëso formën e regjistrimit dhe rezervo vendin për programin
              mujor ose kampin tërëditor.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#25D366] px-7 py-3 font-black text-white shadow-lg transition hover:bg-[#1db954]"
            >
              Pyet në WhatsApp
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-sm sm:p-6">
            <div className="space-y-4">
              <InfoRow label="Mosha" value="4–15 vjeç" />
              <InfoRow label="Programi mujor" value="Korrik · 2 orë/ditë" />
              <InfoRow label="Kampi tërëditor" value="6–17 Korrik" />
              <InfoRow label="Orari i kampit" value="08:30 – 16:30" />
              <InfoRow label="Çmimi mujor" value="59€ early bird" />
              <InfoRow label="Kampi" value="99€/javë early bird" />
            </div>

            <button
              type="button"
              onClick={onOpenRegistration}
              className="mt-8 block w-full rounded-full bg-[#E30613] px-8 py-4 text-center font-black text-white transition hover:bg-red-700"
            >
              Hap formën e regjistrimit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p className="font-bold text-slate-500">{label}</p>
      <p className="font-black text-[#1F2933] sm:text-right">{value}</p>
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-14 text-[#1F2933] sm:py-20"
    >
      <BackgroundShapes variant="blue" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
              Contact + map
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Keni pyetje?
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Na kontaktoni për më shumë informata rreth grupeve, orareve,
              çmimeve dhe regjistrimit.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactCard
                title="Email"
                value="yeprishtina@gmail.com"
                color="border-[#009FE3]"
              />
              <ContactCard
                title="Phone"
                value="+383 48 108 128"
                color="border-[#78BE20]"
              />
              <ContactCard
                title="WhatsApp"
                value="+383 48 108 128"
                color="border-[#25D366]"
              />
              <ContactCard
                title="Location"
                value="Prishtina, Kosovo"
                color="border-[#E30613]"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4">
              <h3 className="text-2xl font-black">Na gjeni këtu</h3>
              <p className="mt-2 text-slate-600">
                Young Engineers Prishtina · Prishtina, Kosovo
              </p>
            </div>

            <iframe
              title="Young Engineers Prishtina Map"
              src="https://www.google.com/maps?q=Young%20Engineers%20Prishtina%20Prishtina%20Kosovo&z=16&output=embed"
              className="h-[300px] w-full rounded-[1.5rem] border-0 sm:h-[360px] lg:h-[420px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className={`rounded-3xl border-l-8 ${color} bg-white p-5 shadow-sm sm:p-6`}
    >
      <p className="text-sm font-black uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <p className="mt-2 break-words text-lg font-black sm:text-xl">{value}</p>
    </div>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 sm:text-3xl"
      aria-label="Write on WhatsApp"
    >
      💬
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Young Engineers Prishtina. All rights reserved.</p>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#009FE3]" />
          <span className="h-3 w-3 rounded-full bg-[#78BE20]" />
          <span className="h-3 w-3 rounded-full bg-[#F6C400]" />
          <span className="h-3 w-3 rounded-full bg-[#E30613]" />
        </div>
      </div>
    </footer>
  );
}

function Stat({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:p-4">
      <p className={`text-xl font-black sm:text-2xl ${color}`}>{number}</p>
      <p className="mt-1 text-[11px] font-bold text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

function RegistrationModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "Programi Mujor",
    message: "",
  });

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

 async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const data = new URLSearchParams();

  data.append("parentName", formData.parentName);
  data.append("phone", formData.phone);
  data.append("childName", formData.childName);
  data.append("childAge", formData.childAge);
  data.append("program", formData.program);
  data.append("message", formData.message || "Nuk ka");

  try {
    await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    alert("Regjistrimi u dërgua! Kontrollo Google Sheet.");

    setFormData({
      parentName: "",
      phone: "",
      childName: "",
      childAge: "",
      program: "Programi Mujor",
      message: "",
    });

    onClose();
  } catch (error) {
    alert("Diçka shkoi gabim. Provo përsëri.");
  }
}

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1F2933]/60 px-3 py-5 backdrop-blur-sm sm:px-4 sm:py-8">
      <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl sm:rounded-[2.5rem]">
        <div className="h-4 bg-[#E30613]" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-xl font-black text-slate-700 transition hover:bg-[#E30613] hover:text-white sm:right-5 sm:top-5 sm:h-11 sm:w-11"
          aria-label="Mbyll formën"
        >
          ×
        </button>

        <div className="p-5 sm:p-7 lg:p-10">
          <div className="max-w-2xl">
            <div className="grid h-16 w-16 place-items-center rounded-3xl bg-[#F6C400] text-3xl">
              🚀
            </div>

            <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-[#E30613] sm:text-sm sm:tracking-[0.3em]">
              Registration
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Regjistro fëmijën për Summer School 2026
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Plotëso të dhënat më poshtë dhe kërkesa do të dërgohet direkt në
              WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Emri i prindit
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  placeholder="Shkruani emrin tuaj"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none transition focus:border-[#009FE3] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Numri i telefonit
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+383 ..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none transition focus:border-[#009FE3] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Emri i fëmijës
                </label>
                <input
                  type="text"
                  name="childName"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                  placeholder="Emri i fëmijës"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none transition focus:border-[#009FE3] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-black text-slate-700">
                  Mosha e fëmijës
                </label>
                <input
                  type="number"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  required
                  min="4"
                  max="15"
                  placeholder="P.sh. 8"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none transition focus:border-[#009FE3] focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Zgjedh programin
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none transition focus:border-[#009FE3] focus:bg-white"
              >
                <option>Programi Mujor</option>
                <option>Kampi Tërëditor</option>
                <option>Ende nuk jam i/e sigurt</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-black text-slate-700">
                Shënim shtesë
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="P.sh. orari që ju përshtatet, pyetje shtesë, etj."
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold outline-none transition focus:border-[#009FE3] focus:bg-white"
              />
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border-2 border-[#009FE3] bg-white px-6 py-4 text-center font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white"
              >
                Mbyll
              </button>

              <button
                type="submit"
                className="rounded-full bg-[#E30613] px-6 py-4 text-center font-black text-white transition hover:bg-red-700"
              >
                Dërgo regjistrimin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;