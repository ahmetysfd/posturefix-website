const APP_STORE_URL =
  "https://apps.apple.com/ru/app/posturefix-analyze-with-ai/id6765663533?l=en-GB";

const SCREENS = [
  { src: "/screens/01.png", alt: "AI posture analysis flagging posture risks" },
  { src: "/screens/02.png", alt: "Personalized daily program built for you" },
  { src: "/screens/03.png", alt: "Guided exercises, step by step" },
  { src: "/screens/04.png", alt: "From analysis to a ready program" },
  { src: "/screens/05.png", alt: "Smart reminders and weekly schedule" },
];

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.13 3.15c.88-1.06 1.48-2.53 1.32-4.01-1.28.05-2.82.86-3.74 1.93-.82.95-1.54 2.47-1.35 3.92 1.43.11 2.89-.73 3.77-1.84Zm3.18 9.54c.03 3.17 2.79 4.23 2.82 4.24-.02.07-.44 1.51-1.45 3-.87 1.29-1.78 2.58-3.2 2.61-1.4.03-1.85-.83-3.46-.83-1.61 0-2.11.81-3.43.86-1.37.05-2.42-1.37-3.3-2.65-1.8-2.6-3.17-7.36-1.33-10.55.91-1.58 2.53-2.58 4.29-2.61 1.34-.03 2.61.91 3.46.91.84 0 2.42-1.13 4.08-.96.69.03 2.63.28 3.88 2.1-.1.06-2.32 1.35-2.36 3.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.94 3.74c-.49.51-.78 1.26-.78 2.19v12.13c0 .94.29 1.69.78 2.2l.12.1 6.79-6.79v-.14L5.06 3.64l-.12.1Z" fill="#34d39a" />
      <path d="m14.1 11.16-2.15 2.15v.14l2.15 2.15.05-.03 2.56-1.45c.73-.41.73-1.08 0-1.5l-2.56-1.43-.05-.03Z" fill="#ffd35c" />
      <path d="m14.15 15.57-2.2-2.2-6.91 6.9c.78.8 2 .9 3.36.14l5.75-3.25Z" fill="#5aa9ff" />
      <path d="M14.15 11.16 8.4 7.92c-1.36-.77-2.58-.66-3.36.14l6.91 6.91 2.2-2.2Z" fill="#ff6376" />
    </svg>
  );
}

function StoreButton({ icon, label, store, href }) {
  const inner = (
    <>
      <span className="store-btn__icon">{icon}</span>
      <span className="store-btn__text">
        <small>{label}</small>
        <strong>{store}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="store-btn" href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <div className="store-btn store-btn--soon" aria-disabled="true">
      {inner}
    </div>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="feature">
      <div className="feature__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="bg-glow" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top" aria-label="Posturefix home">
          <img className="brand__mark" src="/icon.png" alt="" />
          <span className="brand__name">Posturefix</span>
        </a>
        <nav className="nav__links" aria-label="Sections">
          <a href="#features">Features</a>
          <a href="#screens">Screens</a>
          <a href="/support.html">Support</a>
        </nav>
        <a className="nav__cta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
          Get the app
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <span className="eyebrow">
              <span className="eyebrow__dot" /> AI Posture Analysis
            </span>
            <h1>
              Better posture,
              <br />
              <span className="grad">backed by AI.</span>
            </h1>
            <p className="hero__sub">
              Scan your posture in seconds. Posturefix detects risks like forward
              head, rounded shoulders and pelvic tilt — then builds a personalized
              daily program to fix them.
            </p>

            <div className="store-row">
              <StoreButton
                icon={<AppleIcon />}
                label="Download on the"
                store="App Store"
                href={APP_STORE_URL}
              />
              <StoreButton
                icon={<PlayIcon />}
                label="Coming soon to"
                store="Google Play"
              />
            </div>

            <div className="trust">
              <span>Free to download</span>
              <i aria-hidden="true">•</i>
              <span>Private &amp; on-device scanning</span>
            </div>
          </div>

          <div className="hero__art">
            <div className="hero__phone hero__phone--back" aria-hidden="true">
              <img src="/screens/02.png" alt="" loading="eager" />
            </div>
            <div className="hero__phone hero__phone--front">
              <img src="/screens/01.png" alt={SCREENS[0].alt} loading="eager" />
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <Feature
            icon={<ScanIcon />}
            title="AI posture scan"
          >
            Snap a photo and our AI maps your alignment, flagging issues with clear
            risk levels you can actually understand.
          </Feature>
          <Feature icon={<PlanIcon />} title="A program built for you">
            Your analysis turns into a personalized daily routine that targets your
            specific risk areas — nothing generic.
          </Feature>
          <Feature icon={<GuideIcon />} title="Guided, step by step">
            Follow along with timed, illustrated exercises designed to undo the
            damage of sitting all day.
          </Feature>
          <Feature icon={<BellIcon />} title="Smart reminders">
            Build the habit with a weekly schedule and gentle nudges that keep you
            consistent.
          </Feature>
        </section>

        <section className="showcase" id="screens">
          <div className="showcase__head">
            <h2>
              See it in <span className="grad">action</span>
            </h2>
            <p>Everything you need to stand taller, in one focused app.</p>
          </div>
          <div className="showcase__track">
            {SCREENS.map((s) => (
              <figure className="shot" key={s.src}>
                <img src={s.src} alt={s.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta__card">
            <img className="cta__icon" src="/icon.png" alt="" />
            <h2>Start fixing your posture today.</h2>
            <p>Download Posturefix and get your first AI scan in under a minute.</p>
            <div className="store-row store-row--center">
              <StoreButton
                icon={<AppleIcon />}
                label="Download on the"
                store="App Store"
                href={APP_STORE_URL}
              />
              <StoreButton
                icon={<PlayIcon />}
                label="Coming soon to"
                store="Google Play"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <img src="/icon.png" alt="" />
          <span>Posturefix</span>
        </div>
        <nav className="footer__links" aria-label="Legal">
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms-of-use.html">Terms of Use</a>
          <a href="/delete-account.html">Delete Account</a>
          <a href="/support.html">Support</a>
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} Posturefix. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

/* --- inline feature icons --- */
function ScanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.5 9.5h5M9.5 13h5M9.5 16.5h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function GuideIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.5 9.3v5.4l4-2.7-4-2.7Z" fill="currentColor" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 2H4.5L6 16.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
