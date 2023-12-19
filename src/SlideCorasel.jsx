import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideCorasel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:5000,
    speed: 2000,
    cssEase:"linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-screen h-full bg-slate-900 pb-5">
        <div className="w-5/6 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="bg-black h-[420px] border border-purple-800 hover:scale-105 text-black rounded-xl">
                  <div className="rounded-t-xl  flex justify-center">
                    <img
                      src={item.img}
                      className="h-48 w-full rounded-t-xl"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col text-purple-300 font-serif justify-center items-center gap-4 p-4">
                    <p className="text-2xl font-semibold">{item.name}</p>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: "Lavender",
    desc: "Lavender is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/download.webp",
  },
  {
    name: "Orchids",
    desc: "Lavender is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/Buy-Phalaenopsis-Bru-Q-Saleha-orchids-online-opt-2.jpg",
  },
  {
    name: "Lily",
    desc: "Lily is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/lilly.webp",
  },
  {
    name: "Mountain pine",
    desc: "Mountain pine is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/download(2).webp",
  },
  {
    name: "Lodgepole pine",
    desc: "Lodgepole pine is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/pine21.jpeg",
  },
  {
    name: "Pinus merkusi",
    desc: "Pinus merkusi is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/1.webp",
  },
  {
    name: "Pinus heldreichii",
    desc: "Pinus heldreichii is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/2.webp",
  },
  {
    name: "Fig",
    desc: "Fig is more than just an aromatic plant. Studies suggestit may help relieve stress, chronic pain, high blood pressure, and asthma",
    img: "/4.jpeg",
  },
];
export default SlideCorasel;
