export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Gradient accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 to-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/15 to-blue-500/15 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-white font-semibold text-xl">Deposure</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Docs
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Pricing
            </a>
            <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
              Start Tunneling Free
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                <span className="text-blue-400 text-sm font-medium">99.97% uptime • Global servers</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                Localhost tunneling
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  that just works
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl">
                Secure tunnels to localhost in seconds. No complexity, no waiting.
                Fast, stable, and free for personal use.
              </p>

              {/* Single CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg text-base flex-shrink-0">
                  Start Tunneling Free →
                </button>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No credit card required</span>
                </div>
              </div>

              {/* Quick stats */}
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold text-white">Unlimited</div>
                  <div className="text-sm text-gray-500">Bandwidth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4 Regions</div>
                  <div className="text-sm text-gray-500">US, EU, Asia, AU</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">&lt;50ms</div>
                  <div className="text-sm text-gray-500">Average latency</div>
                </div>
              </div>
            </div>

            {/* Right: Comparison Visual */}
            <div className="relative animate-slide-up">
              {/* Before/After Comparison */}
              <div className="space-y-6">
                {/* "Other Tools" card - Complex */}
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6 relative">
                  <div className="absolute -top-3 -right-3 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full">
                    Complex
                  </div>
                  <div className="text-gray-400 text-sm font-medium mb-3">Other Tools</div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-gray-500">$ ngrok config add-authtoken YOUR_TOKEN</div>
                    <div className="text-gray-500">$ ngrok http 3000 --region us</div>
                    <div className="text-gray-500">$ ngrok http 3000 --subdomain myapp</div>
                    <div className="text-gray-500">$ ngrok http 3000 --config /path/to/config.yml</div>
                    <div className="text-red-400">⚠ Rate limited after 40 requests/minute</div>
                    <div className="text-red-400">⚠ Random subdomain changes</div>
                  </div>
                  <div className="mt-4 text-gray-600 text-xs">6 steps • 5 min setup</div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* "Deposure" card - Simple */}
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 relative">
                  <div className="absolute -top-3 -right-3 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                    Simple
                  </div>
                  <div className="text-gray-200 text-sm font-medium mb-3">Deposure</div>
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-gray-300">$ deposure 3000</div>
                    <div className="text-green-400">✓ Tunnel ready at: https://myapp.deposure.io</div>
                    <div className="text-green-400">✓ Unlimited bandwidth</div>
                    <div className="text-green-400">✓ Custom domain included</div>
                  </div>
                  <div className="mt-4 text-green-400 text-xs font-medium">1 command • 5 seconds</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
                  <span className="text-white text-sm font-semibold">10x Faster Setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Installation command */}
          <div className="mt-20 max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-gray-400 text-sm">Get started in seconds</p>
            </div>
            <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 font-mono">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 text-xs">Terminal</span>
                <button className="text-gray-400 hover:text-white text-xs flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy
                </button>
              </div>
              <div className="text-gray-300 text-sm">
                <span className="text-purple-400">npm</span> install -g deposure
              </div>
              <div className="text-gray-300 text-sm mt-2">
                <span className="text-blue-400">deposure</span> <span className="text-cyan-400">3000</span>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Lightning Fast</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Global edge network with sub-50ms latency. Your tunnels are ready in seconds.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">Secure by Default</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                End-to-end encryption, custom domains, and traffic inspection included.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg">No Limits</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlimited bandwidth, no rate limits, and 99.97% uptime SLA. Scale without worry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
