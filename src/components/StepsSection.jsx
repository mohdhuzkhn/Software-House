export default function StepSection() {
  return (
    <div className="pt-12 pb-14 px-8 bg-blue-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="goat tracking-wider text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-blue-900 to-blue-500 bg-clip-text text-transparent">
            Our Workflow
          </h2>
          <p className="text-blue-500 text-lg max-w-3xl mx-auto p-regular">
            From Concept & Vision to Code — Streamlined Steps for Exceptional Results.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-0.5 bg-gradient-to-r from-black via-blue-700 to-black opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-700 to-black opacity-40 animate-pulse"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {/* Step 01 */}
            <div className="group relative">
              <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-40 h-40 relative">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black to-blue-800 p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        {/* Inner Circle */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-black to-blue-800 flex items-center justify-center relative overflow-hidden shadow-2xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5"></div>
                          <span className="text-white text-3xl font-black relative z-10 goat">
                            01
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Floating indicator */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full shadow-lg animate-bounce"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-black text-xl font-bold leading-tight tracking-wider goat">
                    Discovery & Strategy
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs p-regular">
                    We start by understanding your goals, audience, and vision — translating them into a clear, actionable plan that sets the foundation for success.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="group relative">
              <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-40 h-40 relative">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-800 to-black p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        {/* Inner Circle */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-800 to-black flex items-center justify-center relative overflow-hidden shadow-2xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5"></div>
                          <span className="text-white text-3xl font-black relative z-10 goat">
                            02
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full shadow-lg animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-black text-xl font-bold leading-tight tracking-wider goat">
                    Design & Prototyping
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs p-regular">
                    Our creative team transforms ideas into visually stunning, user-focused designs and interactive prototypes, ensuring alignment before development.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="group relative">
              <div className="flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105">
                <div className="relative mb-8">
                  <div className="w-40 h-40 relative">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black via-blue-800 to-black p-1">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        {/* Inner Circle */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-black via-blue-800 to-black flex items-center justify-center relative overflow-hidden shadow-2xl">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/5"></div>
                          <span className="text-white text-3xl font-black relative z-10 goat">
                            03
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-black to-blue-800 rounded-full shadow-lg animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-black text-xl font-bold leading-tight tracking-wider goat">
                    Development & Delivery
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs p-regular">
                    We code with precision, test rigorously, and deploy seamlessly — delivering a high-performing product that’s scalable, secure, and future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
