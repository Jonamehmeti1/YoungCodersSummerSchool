const carouselItems = [
  {
    icon: "💻",
    title: "Coding",
    color: "bg-[#009FE3]",
  },
  {
    icon: "🧩",
    title: "STEM",
    color: "bg-[#78BE20]",
  },
  {
    icon: "🤖",
    title: "AI",
    color: "bg-[#F6C400]",
  },
  {
    icon: "🎮",
    title: "Games",
    color: "bg-[#E30613]",
  },
  {
    icon: "⚙️",
    title: "Engineering",
    color: "bg-[#009FE3]",
  },
  {
    icon: "🚀",
    title: "Projects",
    color: "bg-[#78BE20]",
  },
];

const programs = [
  {
    title: "Coding for Kids",
    age: "Ages 7–12",
    color: "bg-[#009FE3]",
    icon: "💻",
    image: "/images/coding-class.png",
    description:
      "Students learn coding basics through games, animations, logic challenges, and creative digital projects.",
    bullets: ["Logic games", "Animations", "Creative projects"],
  },
  {
    title: "STEM & Engineering",
    age: "Ages 6–12",
    color: "bg-[#78BE20]",
    icon: "🧩",
    image: "/images/stem-camp.png",
    description:
      "Hands-on activities where students build, test, solve problems, and understand how technology works.",
    bullets: ["Build & test", "Problem solving", "Team challenges"],
  },
  {
    title: "AI & Smart Tech",
    age: "Ages 9–14",
    color: "bg-[#F6C400]",
    icon: "🤖",
    image: "/images/foto2.PNG",
    description:
      "A beginner-friendly introduction to artificial intelligence, prompts, smart tools, and digital safety.",
    bullets: ["AI basics", "Prompting", "Digital safety"],
  },
  {
    title: "Game Design",
    age: "Ages 8–14",
    color: "bg-[#E30613]",
    icon: "🎮",
    image: "/images/hero-kids.png",
    description:
      "Students design simple games while learning creativity, teamwork, problem solving, and presentation skills.",
    bullets: ["Mini games", "Story design", "Presentations"],
  },
];

const schedule = [
  {
    week: "Week 1",
    title: "Coding Basics",
    text: "Commands, logic, sequencing, and beginner-friendly creative coding activities.",
    color: "bg-[#009FE3]",
  },
  {
    week: "Week 2",
    title: "STEM Challenges",
    text: "Hands-on problem solving, teamwork, building activities, and engineering thinking.",
    color: "bg-[#78BE20]",
  },
  {
    week: "Week 3",
    title: "AI & Games",
    text: "Students explore AI tools, prompts, game ideas, and responsible technology.",
    color: "bg-[#F6C400]",
  },
  {
    week: "Week 4",
    title: "Final Project",
    text: "Students prepare a final project and present what they learned.",
    color: "bg-[#E30613]",
  },
];

const benefits = [
  "Hands-on learning",
  "STEM activities",
  "Coding projects",
  "Creative challenges",
  "Teamwork",
  "Final certificate",
];

function App() {
  return (
    <main className="min-h-screen bg-white text-[#1F2933]">
      <Navbar />
      <Hero />
      <TechCarousel />
      <DiscountCountdown />
      <About />
      <Programs />
      <Schedule />
      <WhyJoin />
      <Register />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="relative grid h-12 w-12 place-items-center rounded-full bg-white shadow-md">
            <span className="absolute left-2 top-2 h-3 w-3 rounded-full bg-[#009FE3]" />
            <span className="absolute right-2 top-2 h-3 w-3 rounded-full bg-[#78BE20]" />
            <span className="absolute bottom-2 left-2 h-3 w-3 rounded-full bg-[#F6C400]" />
            <span className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-[#E30613]" />
            <span className="gear-spin text-lg">⚙️</span>
          </div>

          <div>
            <p className="text-lg font-black leading-none">Young Coders Hub</p>
            <p className="text-xs font-bold uppercase tracking-wider text-[#009FE3]">
              Smart Code Only
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
            href="https://wa.me/38344000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-black text-white shadow-md transition hover:bg-[#1db954]"
          >
            WhatsApp
          </a>
          <a
            href="#register"
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

      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#009FE3]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-[#78BE20]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#009FE3]/20 bg-white px-4 py-2 text-sm font-bold text-[#009FE3] shadow-sm">
            🚀 Summer School 2026
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Build your child’s{" "}
            <span className="text-[#009FE3]">future</span> with coding, STEM &
            creativity.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            A hands-on summer school where curious students learn coding,
            engineering, AI, games, teamwork, and confidence through fun
            practical projects.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#register"
              className="rounded-full bg-[#E30613] px-8 py-4 text-center font-black text-white shadow-lg transition hover:bg-red-700"
            >
              Register Your Child
            </a>
            <a
              href="https://wa.me/38344000000"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-8 py-4 text-center font-black text-white shadow-lg transition hover:bg-[#1db954]"
            >
              Write on WhatsApp
            </a>
            <a
              href="#programs"
              className="rounded-full border-2 border-[#009FE3] bg-white px-8 py-4 text-center font-black text-[#009FE3] transition hover:bg-[#009FE3] hover:text-white"
            >
              View Programs
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <Stat number="4" label="Weeks" color="text-[#009FE3]" />
            <Stat number="7–14" label="Ages" color="text-[#78BE20]" />
            <Stat number="100%" label="Fun" color="text-[#E30613]" />
          </div>
        </div>

        <div className="relative">
          <div className="image-card-shadow relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img
                src="/images/stem-camp.png"
                alt="Kids learning coding and STEM"
                className="h-[450px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/95 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-black uppercase tracking-wider text-[#009FE3]">
                  Summer School 2026
                </p>

                <h2 className="mt-1 text-2xl font-black text-[#1F2933]">
                  Build. Code. Create.
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MiniCard icon="💻" title="Coding" color="bg-[#009FE3]" />
                  <MiniCard icon="🧩" title="STEM" color="bg-[#78BE20]" />
                </div>
              </div>
            </div>
          </div>

          <div className="float-element absolute -right-4 -top-4 rounded-2xl bg-[#F6C400] px-5 py-3 font-black text-[#1F2933] shadow-xl">
            New Camp!
          </div>

          <div className="float-element-slow absolute -left-6 top-20 rounded-full bg-[#78BE20] p-4 text-2xl shadow-xl">
            ⚙️
          </div>

          <div className="float-element-fast absolute -right-4 bottom-24 rounded-full bg-[#E30613] p-4 text-2xl shadow-xl">
            🚀
          </div>
        </div>
      </div>
    </section>
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
              className="flex min-w-[210px] items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
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
  return (
    <section className="bg-[#1F2933] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <div className="inline-flex rounded-full bg-[#E30613] px-4 py-2 text-sm font-black text-white">
            Early Bird Discount
          </div>

          <h2 className="mt-3 text-2xl font-black md:text-3xl">
            30% discount for early registrations
          </h2>

          <p className="mt-1 text-white/70">
            Register before the deadline and secure your child’s spot.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 text-center">
          <CountdownBox number="09" label="Days" color="bg-[#009FE3]" />
          <CountdownBox number="14" label="Hours" color="bg-[#78BE20]" />
          <CountdownBox number="32" label="Min" color="bg-[#F6C400]" />
          <CountdownBox number="18" label="Sec" color="bg-[#E30613]" />
        </div>

        <a
          href="#register"
          className="rounded-full bg-[#F6C400] px-8 py-4 font-black text-[#1F2933] shadow-lg transition hover:bg-yellow-300"
        >
          Reserve Now
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

function MiniCard({
  icon,
  title,
  color,
}: {
  icon: string;
  title: string;
  color: string;
}) {
  return (
    <div className="card-hover rounded-2xl bg-white p-4 shadow-sm">
      <div
        className={`grid h-12 w-12 place-items-center rounded-2xl ${color} text-2xl`}
      >
        {icon}
      </div>
      <p className="mt-3 font-black text-slate-800">{title}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#F6C400]/20 blur-3xl" />

      <div className="relative grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
            About us
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
            A fun place where children learn by doing.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            Young Coders Hub helps students explore coding, STEM, engineering,
            games, and AI in a simple and exciting way.
          </p>

          <p>
            Our goal is to help children become creative thinkers, confident
            problem-solvers, and smart digital citizens.
          </p>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-slate-50 py-20 text-[#1F2933]"
    >
      <div className="absolute left-10 top-10 text-7xl opacity-10">⚙️</div>
      <div className="absolute right-10 top-24 text-7xl opacity-10">🧩</div>
      <div className="absolute bottom-10 left-1/3 text-7xl opacity-10">💻</div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
            Programs
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Summer School Programs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each program is beginner-friendly, practical, and designed to make
            learning exciting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className="card-hover group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
            >
              <div className={`h-3 ${program.color}`} />

              <div className="h-44 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div
                  className={`grid h-16 w-16 place-items-center rounded-3xl ${program.color} text-3xl`}
                >
                  {program.icon}
                </div>

                <p className="mt-6 text-sm font-black uppercase tracking-wider text-slate-500">
                  {program.age}
                </p>

                <h3 className="mt-2 text-xl font-black">{program.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {program.description}
                </p>

                <div className="mt-5 space-y-2">
                  {program.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#009FE3]" />
                      {bullet}
                    </div>
                  ))}
                </div>

                <a
                  href="#register"
                  className="mt-6 block rounded-full border-2 border-slate-200 px-5 py-3 text-center text-sm font-black transition hover:border-[#009FE3] hover:bg-[#009FE3] hover:text-white"
                >
                  Choose Program
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section
      id="schedule"
      className="engineering-grid mx-auto max-w-7xl px-6 py-20"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#78BE20]">
          Schedule
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          A colorful 4-week learning journey
        </h2>
      </div>

      <div className="mt-12 grid gap-5">
        {schedule.map((item, index) => (
          <div
            key={item.week}
            className="card-hover grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[180px_1fr] md:items-center"
          >
            <div className="flex items-center gap-4">
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl ${item.color} font-black text-white`}
              >
                {index + 1}
              </div>
              <p className="font-black text-slate-800">{item.week}</p>
            </div>

            <div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyJoin() {
  return (
    <section className="relative overflow-hidden bg-[#009FE3] py-20">
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/20" />
      <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-[#F6C400]/30" />
      <div className="absolute right-1/3 top-10 text-7xl opacity-20">⚙️</div>

      <div className="relative mx-auto max-w-7xl px-6 text-white">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-white/80">
              Why join?
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              More than just a summer activity.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/90">
              Students learn how to think, build, communicate, and believe in
              their own creativity.
            </p>
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

function Register() {
  return (
    <section id="register" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F6C400] text-[#1F2933]">
        <div className="absolute right-8 top-8 text-7xl opacity-20">🚀</div>
        <div className="absolute bottom-8 left-8 text-7xl opacity-20">💻</div>

        <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#E30613]">
              Registration
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Ready to join the summer school?
            </h2>

            <p className="mt-5 text-lg leading-8">
              Register your child and give them a summer full of coding,
              creativity, engineering, teamwork, and confidence.
            </p>

            <a
              href="https://wa.me/38344000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-[#25D366] px-7 py-3 font-black text-white shadow-lg transition hover:bg-[#1db954]"
            >
              Ask on WhatsApp
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <InfoRow label="Location" value="Prishtina, Kosovo" />
              <InfoRow label="Age groups" value="7–14 years old" />
              <InfoRow label="Duration" value="4 weeks" />
              <InfoRow label="Status" value="Registrations open" />
            </div>

            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 block rounded-full bg-[#E30613] px-8 py-4 text-center font-black text-white transition hover:bg-red-700"
            >
              Open Registration Form
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
    <section id="contact" className="bg-slate-50 py-20 text-[#1F2933]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#009FE3]">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Have questions?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Contact us for more information about groups, schedule,
              registration, and program details.
            </p>
          </div>

          <div className="grid gap-4">
            <ContactCard
              title="Email"
              value="info@youngcodershub.com"
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
      className={`card-hover rounded-3xl border-l-8 ${color} bg-white p-6 shadow-sm`}
    >
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
      href="https://wa.me/38344000000"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-3xl text-white shadow-2xl"
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
        <p>© 2026 Young Coders Hub. All rights reserved.</p>

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

export default App;