function App() {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3">
      <img
        src="/logo.svg"
        alt="AI Solution Forum logo"
        style={{ width: 80, height: 80 }}
        className="mb-3"
        draggable={false}
      />
      <h1 className="fw-semibold display-5 mb-2">
        Solving World Problems Together With AI
      </h1>
      <p className="text-muted mb-3">Open Source AI Solutions Repository</p>
      <a
        href="https://github.com/DeveloperMattC/OpenSourceAISolutions"
        className="link-primary"
      >
        GitHub
      </a>
    </div>
  );
}

export default App;
