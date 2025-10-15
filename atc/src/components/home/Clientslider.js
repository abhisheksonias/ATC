import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const clients = [
  { image: '/Abshar_Abdulla.png', name: 'Abshar Abdulla', subscribers: '349 Subscribers', category: 'Content Creator' },
  { image: '/Blissbyaruti.png', name: 'Bliss by Aruti', subscribers: '142 Followers', category: 'Lifestyle & Beauty' },
  { image: '/Encreators.png', name: 'Encreators', subscribers: '119 Subscribers', category: 'Entertainment' },
  { image: '/Financialrecap.png', name: 'Financial Recap', subscribers: '12.4K Subscribers', category: 'Finance & Education' },
  { image: "/Papa_Louie.png", name: "Papa Louie’s Pizza", subscribers: '18.4K Followers', category: 'Food & Beverage' },
  { image: '/Patilvadapav.png', name: 'Patil VadaPav & Misal House', subscribers: '794 Followers', category: 'Food & Beverage' },
  { image: '/Santusti.png', name: 'Santushti Shakes & More', subscribers: '9,914 Followers', category: 'Food & Beverage' },
  { image: '/Sarah_Jefferies.png', name: 'Sara Jefferies', subscribers: '66K Subscribers', category: 'Lifestyle & Fitness' },
  { image: '/Scribble_science.png', name: 'Scribble Science', subscribers: '308K Subscribers', category: 'Education & Motivation' },
  { image: '/Shake_Studio.png', name: 'Shake Studio', subscribers: '148K Subscribers', category: 'Media & Production' },
  { image: '/Shakes_Heaven.png', name: 'Shakes Heaven', subscribers: '161K Subscribers', category: 'Food & Beverage' },
  { image: '/Shrivay_Dental_Clinic.png', name: 'Shrivay Dental Clinic', subscribers: '631 Followers', category: 'Healthcare' },
  { image: '/TechTribeTV.png', name: 'Tech Tribe TV', subscribers: '7.3K Subscribers', category: 'Technology' },
  { image: '/The_Fruit_Cart.png', name: 'The Fruit Cart', subscribers: '10K Followers', category: 'Food & Beverage' },
  { image: '/Tony_Jefferies.png', name: 'Tony Jefferies', subscribers: '2.72M Subscribers', category: 'Fitness & Sports' },
];


const initials = (name = '') => name.split(' ').map(s => s[0]).join('').slice(0,2).toUpperCase();

const ClientsWeWorkedWith = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    arrows: false,
    swipe: false,
    touchMove: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Force slick slides to equal height */}
      <style>{`
        .slick-track { display: flex !important; }
        .slick-slide { height: inherit !important; }
        .slick-slide > div { height: 100%; }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            Trusted by <span className="relative inline-block">
              <span className="text-black">creators</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-gradient-to-r from-blue-200/60 to-purple-200/60 -z-10 rounded-full"></span>
            </span>
          </h2>
          <div className="h-1 w-28 sm:w-32 bg-gradient-to-r from-black/80 via-gray-600 to-black/80 mx-auto rounded-full mt-6"></div>
          <p className="text-gray-600 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            Join hundreds of satisfied creators who trust us with their content
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/40 to-transparent rounded-3xl blur-3xl" aria-hidden="true"></div>
          <div className="relative z-10">
            <Slider {...settings}>
              {clients.map((client, i) => (
                <div key={i} className="h-full px-2 sm:px-3">
                  <article
                    className="h-full flex flex-col items-stretch bg-white rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100/70 transition-transform duration-300 will-change-transform hover:-translate-y-2"
                    aria-label={`${client.name} card`}
                  >
                    {/* Avatar */}
                    <div className="mx-auto relative">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full p-[3px] bg-gradient-to-br from-gray-200 via-gray-100 to-white shadow-inner">
                        <Avatar src={client.image} name={client.name} />
                      </div>
                      {/* <span className="sr-only">Verified partner</span> */}
                      {/* <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full ring-4 ring-white" /> */}
                    </div>

                    {/* Body */}
                    <div className="mt-6 flex-1 flex flex-col items-center text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">{client.name}</h3>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center justify-center gap-2 text-gray-700">
                          <svg className="w-4 h-4 text-red-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                          <p className="text-base sm:text-lg font-semibold">{client.subscribers}</p>
                        </div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {client.category}
                        </span>
                      </div>
                      {/* Spacer to push footer if needed */}
                      <div className="flex-1" />
                    </div>
                  </article>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

/** Avatar with fallback initials (ensures perfect circle & consistent sizing) */
const Avatar = ({ src, name }) => {
  const [error, setError] = React.useState(false);
  return (
    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
      {!error ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-gray-700 font-semibold select-none">{initials(name)}</span>
      )}
    </div>
  );
};

export default ClientsWeWorkedWith;
