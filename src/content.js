// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "Valeriy Ivanov: The Warming Arctic"
  },

  // Main Content
  // example:
  // -- A video asset --
  // {
  //   title: "Meet Valeriy Ivanov",
  //   text: `Valeriy Ivanov, PhD, is Associate Professor in the Department of Civil and Environmental Engineering at the University of Michigan.\nSupported by the National Science Foundation.`,
  //   video: "https://youtu.be/lJrYeFYx374"
  // },
  // -- An image asset --
  // {
  //   title: "Field Site Location",
  //   text: `Ivanov currently works in Western Siberia in Russia, at the northern tip of the Polar Urals, or the southern peninsula of the Yamal region. The site is remote, so there is no human impact and it is far away from reindeer migration paths.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Map of locations and images of budget towers"
  //   }
  // },
  main: [
    {
      title: "Meet Valeriy Ivanov",
      text: `Valeriy Ivanov, PhD, is Associate Professor in the Department of Civil and Environmental Engineering at the University of Michigan.\nSupported by the National Science Foundation.`,
      video: "https://youtu.be/_zVO8-x9fB4"
    },
    {
      title: "Field Site Location",
      text: `Ivanov currently works in Western Siberia in Russia, at the northern tip of the Polar Urals, or the southern peninsula of the Yamal region. The site is remote, so there is no human impact and it is far away from reindeer migration paths.`,
      image: {
        source: "/images/ivanov_image1.png",
        desc: "Map of locations and images of budget towers"
      }
    },
    {
      title: "Measuring Water in the Arctic",
      text: `Ivanov and his team of collaborators began installing "Energy Budget Stations" in the Urals in 2018 and collected the first set of data in 2019.`,
      video: "https://youtu.be/3QxSJcVsmyM"
    },
    {
      title: "Energy Budget Stations",
      text: `Ivanov installs towers and sensors called Energy Budget Stations that allow his team to collect continuous data.`,
      image: {
        source: "/images/ivanov_image2.png",
        desc: "Diagram of the various parts of an Energy Budget Station"
      }
    },
    {
      title: "A Day in the Field with Ivanov",
      text: `Follow Ivanov on a typical day in the field in the Siberian Arctic.`,
      video: "https://youtu.be/nuPWYkOWm7g"
    },
    {
      title: "The Maddening Insects",
      text: `You might not think working in the Arctic would involve mosquitos. Could you survive?`,
      video: "https://youtu.be/UIqY3X6-NLQ"
    },
    {
      title: "Computer Models",
      text: `After data is collected from the field, Ivanov creates computer models with his team of students. These models add to our understanding of climate change, now and in the future.`,
      video: "https://youtu.be/oqe_RjmyeLw"
    },
    {
      title: "Climate Change and Choices We Make",
      text: `However small, the local actions we take impact our future climate.`,
      video: "https://youtu.be/maXW1WhID_0"
    }
  ],
  // Secondary Content
  // example:
  // Item with an accompanying image
  // {
  //   title: "Runaway melt",
  //   text: `In the far north, buried soil known as permafrost used to stay frozen year round. But the Arctic is warming more quickly than the rest of the planet. Each summer, more frozen land thaws for a longer time. Scientists are working to explain why the thaw is outpacing even their worst case predictions. The mystery is urgent--melting permafrost releases carbon dioxide, a gas that accelerates the pace of global warming.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Comparitive photos of treeline",
  // -- Text for small caption below image --
  //     caption:
  //       "Scientists remain puzzled why Arctic permafrost is melting more quickly than expected. Here, a chunk of coastal permafrost in Alaska drops into the sea.\nUSGS"
  //   }
  // },
  // Text-only item
  // {
  //   title: "Understanding the vicious cycle of global warming",
  //   text: `U-M researchers studying the warming Arctic witness firsthand the effects of climate change. They track the movement of heat energy from the Sun to air, water, and soil. They note the northward creep of the tree line, with shrubs and forests emerging where none have grown for thousands of years.\nThe carbon trapped in the permafrost is greater than that contained in the entire Amazon rainforest.\nCurrently, there is a vicious cycle, in which the Arctic warms, the permafrost thaws, //   carbon is released, and warming accelerates. U-M researchers led by Valeriy Ivanov are working with other partner universities to monitor feedback mechanisms accelerating Artic climate warming, and determine all the factors and interactions that are affecting the permafrost.`
  // }
  secondary: [
    {
      title: "Runaway melt",
      text: `In the far north, buried soil known as "permafrost" used to stay frozen year round. But in the past few decades, the Arctic has been warming more quickly than the rest of the planet. Each summer, more frozen land thaws for a longer time. Scientists are working to explain why the thaw is outpacing even their worst-case predictions. The mystery is urgent—melting permafrost releases carbon dioxide and methane, gases that accelerate the pace of global warming.`,
      image: {
        source: "/images/ivanov_image3.png",
        desc: "Comparitive photos of treeline",
        caption:
          "Climate warming has resulted in expansion of larch forest as shown here between 1960 and 2003 in Western Siberia, Russia. What remains to be seen is whether more trees decrease the rate of permafrost loss by providing shade to the soil during the summer, or if they accelerate the thaw by trapping more heat during the rest of the year.\nUSGS"
      }
    },
    {
      title: "Understanding the vicious cycle of global warming",
      text: `U-M researchers studying the warming Arctic witness firsthand the effects of climate change. They track the movement of heat energy from the Sun to air, water, and soil. They note the northward creep of the tree line, with shrubs and forests emerging where none have grown for thousands of years.\nThe carbon trapped in the permafrost is greater than that contained in the entire Amazon rainforest.\nCurrently, there is a vicious cycle, in which the Arctic warms, the permafrost thaws, carbon is released, and warming accelerates. U-M researchers led by Valeriy Ivanov are working with other partner universities to monitor feedback mechanisms accelerating Artic climate warming, and determine all the factors and interactions that are affecting the permafrost.`
    }
  ],
  // Links to more stuff
  links: [
    {
      image: "/images/Placeholder1.png",
      desc: "placeholder image 1",
      buttonText: "Museum@Home",
      destination: "https://lsa.umich.edu/ummnh/visitors/museumathome.html"
    },
    {
      image: "/images/Placeholder1.png",
      desc: "placeholder image 2",
      buttonText: "University of Michigan",
      destination: "https://umich.edu"
    },
    {
      image: "/images/Placeholder1.png",
      desc: "placeholder image 3",
      buttonText: "NASA",
      destination: "http://nasa.gov"
    }
  ],
  // Additional credit if needed
  credits: [
    {
      image: "/images/nsfLogo.png",
      desc: "National Science Foundation Logo",
      link: "https://www.nsf.gov/"
    }
  ]
};
