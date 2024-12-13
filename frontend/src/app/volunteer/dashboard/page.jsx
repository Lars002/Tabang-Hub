export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
          <h2 className="text-3xl font-bold text-center text-lime-700 mb-8">Our Initiatives</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* Initiative Card */}
            {[
              {
                title: "Tabang Build",
                description: "Tabang mong tanan",
                imgSrc: "/images/build.png",
                link: "./details"
              },
              {
                title: "Tabang Nurse",
                description: "Donate mog dugo",
                imgSrc: "/images/help.png",
                link: "#"
              },
              {
                title: "Luto Humba",
                description: "Kanang lami",
                imgSrc: "/images/healthy-cooking.png",
                link: "#"
              },
              {
                title: "Hatag Please",
                description: "Bisag peso lang",
                imgSrc: "/images/images.png",
                link: "#"
              }
            ].map((initiative, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                  <img
                    src={initiative.imgSrc}
                    alt={initiative.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    <a href={initiative.link}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {initiative.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
