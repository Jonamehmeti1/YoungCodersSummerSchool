import { useEffect, useState } from "react";

const REGISTRATION_LINK = "https://forms.gle/QKKW1HJozTzwm1Xw9";
const WHATSAPP_LINK = "https://wa.me/38344000000";
const EARLY_BIRD_END_DATE = "2026-07-01T23:59:59";

const heroAlbumImages = [
  "/images/hero-kids.png",
  "/images/coding-class.png",
  "/images/stem-camp.png",
  "/images/foto2.PNG",
  "/images/foto3.PNG",
  "/images/fotoja.png",
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic4.jpg",
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
    age: "Mosha 4–15 vjeç",
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
    priceNote: "Me zbritje për regjistrimet e hershme",
  },
  {
    title: "Kampi Tërëditor",
    subtitle: "6 Korrik – 17 Korrik",
    age: "Mosha 4–15 vjeç",
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
    priceNote: "Dy javë: 189€",
  },
];

const activities = [
  {
    title: "Robotikë & Inxhinieri",
    age: "Mosha 4–15",
    color: "bg-[#009FE3]",
    icon: "🤖",
    image: "/images/foto3.PNG",
    description:
      "Fëmijët ndërtojnë, testojnë dhe mësojnë si funksionojnë robotët dhe sistemet inxhinierike.",
    bullets: ["Build & test", "Team challenges", "Engineering thinking"],
    moreDetails: [
      "Fëmijët mësojnë si ndërtohen mekanizma të thjeshtë.",
      "Punojnë me pjesë praktike, sfida ekipore dhe zgjidhje kreative.",
      "Zhvillojnë logjikë, durim dhe aftësi për zgjidhjen e problemeve.",
    ],
  },
  {
    title: "AI & Kodim",
    age: "Mosha 4–15",
    color: "bg-[#78BE20]",
    icon: "💻",
    image: "/images/pic3.jpg",
    description:
      "Nxënësit njihen me bazat e kodimit dhe inteligjencës artificiale përmes aktiviteteve praktike.",
    bullets: ["Coding basics", "AI activities", "Creative logic"],
    moreDetails: [
      "Fëmijët mësojnë bazat e logjikës programuese.",
      "Punojnë me ushtrime kreative ku kompjuteri ndjek udhëzime.",
      "Njihen me idenë se si AI merr vendime nga të dhënat.",
    ],
  },
  {
    title: "Science Experiments",
    age: "Mosha 4–15",
    color: "bg-[#F6C400]",
    icon: "🧪",
    image: "/images/foto2.PNG",
    description:
      "Eksperimente shkencore që e bëjnë mësimin më argëtues, praktik dhe të kuptueshëm për fëmijët.",
    bullets: ["Experiments", "Discovery", "Hands-on learning"],
    moreDetails: [
      "Fëmijët bëjnë eksperimente të sigurta dhe argëtuese.",
      "Mësojnë përmes vëzhgimit, provës dhe diskutimit.",
      "Zhvillojnë kuriozitet dhe mënyrë shkencore të të menduarit.",
    ],
  },
  {
    title: "3D Design & Print",
    age: "Mosha 4–15",
    color: "bg-[#E30613]",
    icon: "🖨️",
    image: "/images/foto3.PNG",
    description:
      "Fëmijët eksplorojnë dizajnin 3D dhe idenë se si modelet digjitale mund të kthehen në objekte reale.",
    bullets: ["3D design", "Creative models", "Print concepts"],
    moreDetails: [
      "Fëmijët njihen me konceptin e dizajnit 3D.",
      "Mësojnë si një ide digjitale mund të kthehet në objekt real.",
      "Zhvillojnë kreativitet, imagjinatë dhe mendim hapësinor.",
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

const testimonials = [
  {
    name: "Prind i nxënësit",
    text: "Fëmija im ka filluar me pas shumë më shumë interes për teknologji, robotikë dhe eksperimente. Ambient shumë pozitiv dhe edukativ.",
  },
  {
    name: "Prind i nxënëses",
    text: "Na ka pëlqyer shumë mënyra praktike e mësimit. Fëmijët jo vetëm mësojnë, por edhe argëtohen dhe bashkëpunojnë me njëri-tjetrin.",
  },
  {
    name: "Prind",
    text: "Program shumë i mirë për verë. Aktivitetet janë të larmishme dhe fëmijët kthehen në shtëpi me ide të reja çdo ditë.",
  },
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
  const [showActivities, setShowActivities] = useState(true);

  function handleShowActivities() {
    setShowActivities(true);

    setTimeout(() => {
      document.getElementById("activities")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  return (
    <main className="min-h-screen bg-white text-[#1F2933]">
      <Navbar />

      <Hero />
      <TechCarousel />
      <DiscountCountdown />
      <About />
      <Programs onShowActivities={handleShowActivities} />

      {showActivities && <Activities />}

      <Schedule />
      <Gallery />
      <WhyJoin />
      <Testimonials />
      <FAQ />
      <Register />
      <Contact />

      <Footer />
      <WhatsAppFloat />
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
      <div className="absolute left-8 top-10 text-7xl opacity-10">
        {shapes[0]}
      </div>
      <div className="absolute right-10 top-20 text-7xl opacity-10">
        {shapes[1]}
      </div>
      <div className="absolute bottom-16 left-16 text-6xl opacity-10">
        {shapes[2]}
      </div>
      <div className="absolute bottom-10 right-24 text-6xl opacity-10">
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

      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#009FE3]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#F6C400]/20 blur-3xl" />
      <div className="absolute left-1/3 bottom-0 h-56 w-56 rounded-full bg-[#78BE20]/10 blur-3xl" />
      <div className="absolute right-1/3 top-1/3 h-52 w-52 rounded-full bg-[#E30613]/10 blur-3xl" />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="h-20 w-20">
            <img
              src="/images/logo.jpg"
              alt="Young Engineers Prishtina"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <p className="text-lg font-black leading-none">
              Young Engineers Prishtina
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#009FE3]">
              Summer School 2026
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-semibold text-slate-600 hover:text-[#009FE3]"
          >
            About
          </a>

          <a
            href="#programs"
            className="text-sm font-semibold text-slate-600 hover:text-[#009FE3]"
          >
            Programs
          </a>

          <a
            href="#schedule"
            className="text-sm font-semibold text-slate-600 hover:text-[#009FE3]"
          >
            Schedule
          </a>

          <a
            href="#gallery"
            className="text-sm font-semibold text-slate-600 hover:text-[#009FE3]"
          >
            Gallery
          </a>

          <a
            href="#faq"
            className="text-sm font-semibold text-slate-600 hover:text-[#009FE3]"
          >
            FAQ
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-[#1db954]"
          >
            WhatsApp
          </a>

          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#009FE3] px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-[#0087c2]"
          >
            Register Now
          </a>
        </div>
      </nav>
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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#009FE3]/20 bg-white px-4 py-2 text-sm font-bold text-[#009FE3] shadow-sm">
            🚀 Summer School 2026
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            <span className="text-[#009FE3] drop-shadow-sm">Teknologji</span>,{" "}
            <span className="text-[#78BE20] drop-shadow-sm">kreativitet</span>{" "}
            dhe{" "}
            <span className="text-[#F6C400] drop-shadow-sm">argëtim</span> për{" "}
            <span className="text-[#1F2933]">fëmijë.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Program veror për moshat 4–15 vjeç, ku fëmijët mësojnë dhe
            argëtohen përmes Robotikës, Inxhinierisë, AI, Kodimit, Science
            Experiments, 3D Design & Print dhe aktiviteteve eksploruese.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#E30613] px-8 py-4 text-center font-black text-white shadow-lg transition hover:bg-red-700"
            >
              Regjistrohu tani
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 text-center font-black text-white shadow-lg transition hover:bg-[#1db954]"
            >
              Shkruaj në WhatsApp
            </a>

            <a
              href="#programs"
              className="rounded-full border-2 border-[#009FE3] bg-white px-8 py-4 text-center font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white"
            >
              Shiko programet
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
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
      <div className="image-card-shadow relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
        <div className="relative h-[520px] overflow-hidden rounded-[1.5rem] bg-slate-100">
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

          <div className="absolute left-5 top-5 rounded-full bg-white/95 px-5 py-2 text-sm font-black uppercase tracking-wider text-[#009FE3] shadow-lg backdrop-blur">
            📸 Summer Album
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
            <p className="text-sm font-black uppercase tracking-wider text-[#009FE3]">
              Summer School 2026
            </p>

            <h2 className="mt-1 text-2xl font-black text-[#1F2933]">
              Mëso. Krijo. Eksploro.
            </h2>

            <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
              Momente nga teknologjia, robotika, kodimi, eksperimentet dhe
              aktivitetet kreative.
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

      <div className="float-element absolute -right-4 -top-4 rounded-2xl bg-[#F6C400] px-5 py-3 font-black text-[#1F2933] shadow-xl">
        Early Bird!
      </div>

      <div className="float-element-slow absolute -left-6 top-20 rounded-full bg-[#78BE20] p-4 text-2xl shadow-xl">
        ⚙️
      </div>

      <div className="float-element-fast absolute -right-4 bottom-24 rounded-full bg-[#E30613] p-4 text-2xl shadow-xl">
        🚀
      </div>
    </div>
  );
}

function TechCarousel() {
  const repeatedItems = [...carouselItems, ...carouselItems];

  return (
    <section className="border-y border-slate-200 bg-white py-6">
      <div className="carousel-mask overflow-hidden">
        <div className="carousel-track flex w-max gap-5 px-5">
          {repeatedItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="flex min-w-[220px] items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl ${item.color} text-3xl`}
              >
                {item.icon}
              </div>

              <p className="text-xl font-black">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DiscountCountdown() {
  const discountEndDate = new Date(EARLY_BIRD_END_DATE).getTime();

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
    <section className="relative overflow-hidden bg-[#1F2933] px-6 py-8 text-white">
      <BackgroundShapes variant="red" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <div className="inline-flex rounded-full bg-[#E30613] px-4 py-2 text-sm font-black text-white">
            Early Bird Discount
          </div>

          <h2 className="mt-3 text-2xl font-black md:text-3xl">
            Zbritje për regjistrimet e hershme
          </h2>

          <p className="mt-1 text-white/70">
            Përfito zbritje deri në 25% për regjistrimet e hershme në programin
            mujor dhe kampin tërëditor.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 text-center">
          <CountdownBox number={timeLeft.days} label="Ditë" color="bg-[#009FE3]" />
          <CountdownBox number={timeLeft.hours} label="Orë" color="bg-[#78BE20]" />
          <CountdownBox number={timeLeft.minutes} label="Min" color="bg-[#F6C400]" />
          <CountdownBox number={timeLeft.seconds} label="Sek" color="bg-[#E30613]" />
        </div>

        <a
          href={REGISTRATION_LINK}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#F6C400] px-8 py-4 font-black text-[#1F2933] shadow-lg transition hover:bg-yellow-300"
        >
          Rezervo tani
        </a>
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
        className={`grid h-16 w-16 place-items-center rounded-xl ${color} text-2xl font-black text-white`}
      >
        {number}
      </div>

      <p className="mt-2 text-xs font-black uppercase text-white/60">{label}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <BackgroundShapes variant="yellow" />

      <div className="relative grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            About us
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            Një program veror ku fëmijët mësojnë duke krijuar.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Summer School është i dedikuar për fëmijët e moshave 4–15 vjeç dhe
            kombinon teknologjinë, kreativitetin, eksperimentet dhe eksplorimin.
          </p>

          <p>
            Qëllimi është që fëmijët të mësojnë përmes aktiviteteve praktike,
            të zhvillojnë mendim kreativ, vetëbesim, logjikë dhe aftësi
            bashkëpunimi.
          </p>
        </div>
      </div>
    </section>
  );
}

function Programs({
  onShowActivities,
}: {
  onShowActivities: () => void;
}) {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-slate-50 py-20 text-[#1F2933]"
    >
      <BackgroundShapes variant="mixed" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
            Programs
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Zgjidh programin
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {mainPrograms.map((program) => (
            <ProgramCard
              key={program.title}
              {...program}
              onShowActivities={onShowActivities}
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
  age,
  color,
  icon,
  image,
  description,
  details,
  price,
  discountPrice,
  priceNote,
  onShowActivities,
}: {
  title: string;
  subtitle: string;
  age: string;
  color: string;
  icon: string;
  image: string;
  description: string;
  details: string[];
  price: string;
  discountPrice: string;
  priceNote: string;
  onShowActivities: () => void;
}) {
  return (
    <div className="card-hover group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className={`h-3 ${color}`} />

      <div className="h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-slate-500">
              {subtitle}
            </p>
            <h3 className="mt-2 text-3xl font-black">{title}</h3>
            <p className="mt-2 font-black text-[#009FE3]">{age}</p>
          </div>

          <div
            className={`grid h-16 w-16 shrink-0 place-items-center rounded-3xl ${color} text-3xl`}
          >
            {icon}
          </div>
        </div>

        <p className="mt-5 leading-8 text-slate-600">{description}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {details.map((detail) => (
            <div
              key={detail}
              className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600"
            >
              ✅ {detail}
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-3xl bg-slate-50 p-5">
          <p className="text-sm font-black uppercase tracking-wider text-slate-500">
            Çmimi
          </p>

          <div className="mt-2 flex flex-wrap items-end gap-3">
            <p className="text-4xl font-black text-[#E30613]">
              {discountPrice}
            </p>
            <p className="pb-1 text-lg font-bold text-slate-400 line-through">
              {price}
            </p>
          </div>

          <p className="mt-2 font-bold text-slate-600">{priceNote}</p>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <a
            href={REGISTRATION_LINK}
            target="_blank"
            rel="noreferrer"
            className="block rounded-full bg-[#009FE3] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#0087c2]"
          >
            Regjistrohu
          </a>

          <button
            type="button"
            onClick={onShowActivities}
            className="block rounded-full border-2 border-[#009FE3] bg-white px-5 py-4 text-center text-sm font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white"
          >
            Programet
          </button>
        </div>
      </div>
    </div>
  );
}

function Activities() {
  const [openActivity, setOpenActivity] = useState<string | null>(null);

  function toggleActivity(title: string) {
    setOpenActivity((current) => (current === title ? null : title));
  }

  return (
    <section id="activities" className="relative overflow-hidden bg-white py-20">
      <BackgroundShapes variant="green" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#78BE20]">
            Activities
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Çka do të mësojnë fëmijët?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {activities.map((activity) => {
            const isOpen = openActivity === activity.title;

            return (
              <div
                key={activity.title}
                className="card-hover group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className={`h-3 ${activity.color}`} />

                <div className="h-44 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-3xl ${activity.color} text-3xl`}
                  >
                    {activity.icon}
                  </div>

                  <p className="mt-6 text-sm font-black uppercase tracking-wider text-slate-500">
                    {activity.age}
                  </p>

                  <h3 className="mt-2 text-xl font-black">{activity.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {activity.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {activity.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#009FE3]" />
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleActivity(activity.title)}
                    className="mt-5 w-full rounded-full bg-[#009FE3] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0087c2]"
                  >
                    {isOpen ? "Mbyll detajet" : "Mëso më shumë"}
                  </button>

                  {isOpen && (
                    <div className="mt-5 rounded-3xl bg-slate-50 p-4">
                      <p className="text-sm font-black uppercase tracking-wider text-slate-500">
                        Detaje shtesë
                      </p>

                      <div className="mt-3 space-y-3">
                        {activity.moreDetails.map((detail) => (
                          <div
                            key={detail}
                            className="rounded-2xl bg-white px-4 py-3 text-sm font-bold leading-6 text-slate-600 shadow-sm"
                          >
                            ✅ {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section
      id="schedule"
      className="engineering-grid relative overflow-hidden px-6 py-20"
    >
      <BackgroundShapes variant="blue" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#78BE20]">
            Schedule
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Orari dhe aktivitetet e Summer School
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-6">
              <ScheduleOption
                number="01"
                icon="📚"
                color="bg-[#009FE3]"
                label="Programi Mujor"
                title="Gjatë gjithë muajit Korrik"
                description="Program i rregullt veror me aktivitete edukative dhe kreative çdo ditë pune."
                details={[
                  "E Hënë – E Premte",
                  "2 orë në ditë",
                  "Gjatë gjithë muajit Korrik",
                  "Mosha 4–15 vjeç",
                ]}
              />

              <ScheduleOption
                number="02"
                icon="🏕️"
                color="bg-[#78BE20]"
                label="Kampi Tërëditor"
                title="6 Korrik – 17 Korrik"
                description="Kamp ditor me aktivitete të plota nga mëngjesi deri pasdite, për fëmijë që duan eksperiencë më intensive."
                details={[
                  "08:30 – 16:30",
                  "6 Korrik – 17 Korrik",
                  "1 ose 2 javë",
                  "Mosha 4–15 vjeç",
                ]}
              />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
              Aktivitetet
            </p>

            <h3 className="mt-3 text-2xl font-black">
              Çka përfshihet në program?
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Programi është i ndërtuar që fëmijët të mësojnë duke krijuar,
              eksperimentuar dhe bashkëpunuar.
            </p>

            <div className="mt-6 grid gap-3">
              <ActivityLine icon="🤖" text="Robotikë & Inxhinieri" color="bg-[#009FE3]" />
              <ActivityLine icon="💻" text="AI & Kodim" color="bg-[#78BE20]" />
              <ActivityLine icon="🧪" text="Science Experiments" color="bg-[#F6C400]" />
              <ActivityLine icon="🖨️" text="3D Design & Print" color="bg-[#E30613]" />
              <ActivityLine icon="🌿" text="Aktivitete kreative dhe eksploruese" color="bg-[#009FE3]" />
              <ActivityLine icon="👥" text="Punë në grup dhe prezantime" color="bg-[#78BE20]" />
            </div>

            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-[#E30613] px-7 py-4 text-center font-black text-white transition hover:bg-red-700"
            >
              Regjistrohu tani
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScheduleOption({
  number,
  icon,
  color,
  label,
  title,
  description,
  details,
}: {
  number: string;
  icon: string;
  color: string;
  label: string;
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-slate-50 p-6">
      <div className="absolute right-6 top-6 text-7xl opacity-10">{icon}</div>

      <div className="relative grid gap-6 md:grid-cols-[90px_1fr]">
        <div
          className={`grid h-20 w-20 place-items-center rounded-3xl ${color} text-2xl font-black text-white shadow-lg`}
        >
          {number}
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-500">
            {label}
          </p>

          <h3 className="mt-2 text-3xl font-black">{title}</h3>

          <p className="mt-3 text-lg leading-8 text-slate-600">
            {description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {details.map((detail) => (
              <div
                key={detail}
                className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-600 shadow-sm"
              >
                ✅ {detail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityLine({
  icon,
  text,
  color,
}: {
  icon: string;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
      <div
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${color} text-2xl`}
      >
        {icon}
      </div>
      <p className="font-black text-slate-800">{text}</p>
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
    <section id="gallery" className="relative overflow-hidden bg-slate-50 py-20">
      <BackgroundShapes variant="yellow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Momente nga aktivitetet
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-sm">
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

              <div className="h-[560px]" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

              <div className="absolute left-5 top-5 rounded-full bg-white/95 px-5 py-2 text-sm font-black text-[#009FE3] shadow-md">
                📸 Summer School Moments
              </div>

              <button
                onClick={goToPreviousImage}
                className="absolute left-5 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-[#1F2933] shadow-lg transition hover:bg-white"
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                onClick={goToNextImage}
                className="absolute right-5 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-2xl font-black text-[#1F2933] shadow-lg transition hover:bg-white"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <div className="flex flex-col justify-between rounded-[2rem] bg-slate-50 p-6">
              <div>
                <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#E30613] shadow-sm">
                  Aktiviteti {activeImage + 1} / {galleryImages.length}
                </div>

                <h3 className="mt-6 text-3xl font-black leading-tight text-[#1F2933]">
                  Atmosferë, kreativitet dhe argëtim
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
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

                <div className="mt-6 grid grid-cols-2 gap-3">
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
    <section className="relative overflow-hidden bg-[#009FE3] py-20">
      <BackgroundShapes variant="blue" />

      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/80">
              Why join?
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
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

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <BackgroundShapes variant="green" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#78BE20]">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Çka thonë prindërit?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="card-hover rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
            >
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-[#F6C400] text-3xl">
                ⭐
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                “{item.text}”
              </p>

              <p className="mt-6 font-black text-[#1F2933]">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-slate-50 py-20">
      <BackgroundShapes variant="yellow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Pyetjet më të shpeshta
          </h2>
        </div>

        <div className="mt-12 grid gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-[#1F2933]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-8 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Register() {
  return (
    <section id="register" className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20">
      <BackgroundShapes variant="red" />

      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F6C400] text-[#1F2933]">
        <div className="absolute right-8 top-8 text-7xl opacity-20">🚀</div>
        <div className="absolute bottom-8 left-8 text-7xl opacity-20">💻</div>

        <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
              Registration
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Regjistro fëmijën për Summer School 2026
            </h2>

            <p className="mt-5 text-lg leading-8">
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

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <InfoRow label="Mosha" value="4–15 vjeç" />
              <InfoRow label="Programi mujor" value="Korrik · 2 orë/ditë" />
              <InfoRow label="Kampi tërëditor" value="6–17 Korrik" />
              <InfoRow label="Orari i kampit" value="08:30 – 16:30" />
              <InfoRow label="Çmimi mujor" value="59€ early bird" />
              <InfoRow label="Kampi" value="99€/javë early bird" />
            </div>

            <a
              href={REGISTRATION_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-[#E30613] px-8 py-4 text-center font-black text-white transition hover:bg-red-700"
            >
              Hap formën e regjistrimit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
      <p className="font-bold text-slate-500">{label}</p>
      <p className="text-right font-black text-[#1F2933]">{value}</p>
    </div>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-20 text-[#1F2933]"
    >
      <BackgroundShapes variant="blue" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
              Contact + map
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Keni pyetje?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
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
                value="+383 44 000 000"
                color="border-[#78BE20]"
              />
              <ContactCard
                title="WhatsApp"
                value="+383 44 000 000"
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
              src="https://www.google.com/maps?q=Prishtina%20Kosovo&output=embed"
              className="h-[420px] w-full rounded-[1.5rem] border-0"
              loading="lazy"
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
    <div className={`rounded-3xl border-l-8 ${color} bg-white p-6 shadow-sm`}>
      <p className="text-sm font-black uppercase tracking-wider text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl"
      aria-label="Write on WhatsApp"
    >
      💬
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
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
    <div className="rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <p className={`text-2xl font-black ${color}`}>{number}</p>
      <p className="mt-1 text-xs font-bold text-slate-500">{label}</p>
    </div>
  );
}

export default App;