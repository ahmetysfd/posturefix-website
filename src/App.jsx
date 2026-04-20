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
      <path
        d="M4.94 3.74c-.49.51-.78 1.26-.78 2.19v12.13c0 .94.29 1.69.78 2.2l.12.1 6.79-6.79v-.14L5.06 3.64l-.12.1Z"
        fill="#00d08a"
      />
      <path
        d="m14.1 11.16-2.15 2.15v.14l2.15 2.15.05-.03 2.56-1.45c.73-.41.73-1.08 0-1.5l-2.56-1.43-.05-.03Z"
        fill="#ffd166"
      />
      <path
        d="m14.15 15.57-2.2-2.2-6.91 6.9c.78.8 2 .9 3.36.14l5.75-3.25Z"
        fill="#57a4ff"
      />
      <path
        d="M14.15 11.16 8.4 7.92c-1.36-.77-2.58-.66-3.36.14l6.91 6.91 2.2-2.2Z"
        fill="#ff5d73"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.84-4.57 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StoreBadge({ icon, store, label, href }) {
  const content = (
    <>
      <div className="store-badge__icon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{store}</strong>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        className="store-badge"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${store} link`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="store-badge">
      {content}
    </div>
  );
}

export default function App() {
  return (
    <main className="landing">
      <div className="top-strip">
        <div className="brand">
          <div className="brand-mark" />
          <span>Posturefix</span>
        </div>

        <div className="store-badges">
          <StoreBadge icon={<AppleIcon />} label="Coming Soon" store="iOS" />
          <StoreBadge icon={<PlayIcon />} label="Coming Soon" store="Google Play" />
          <StoreBadge
            icon={<GitHubIcon />}
            label="View on"
            store="GitHub"
            href="https://github.com/ahmetysfd/posture-ios-app"
          />
        </div>
      </div>

      <section className="showcase" aria-label="Posturefix app preview">
        <div className="showcase-window">
          <div className="showcase-window__bar">
            <span />
            <span />
            <span />
          </div>
          <iframe
            className="showcase-frame"
            src="https://user-notch-43691001.figma.site/"
            title="Posturefix live preview"
          />
        </div>
      </section>
    </main>
  );
}
