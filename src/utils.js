import * as Yup from "yup";

export const whitelistContent = {
  content:
    "Hello <@&1078649873127182386>, there is a new whitelist form from username. \nHave a look and proceed.",
  embeds: [
    {
      color: 5814783,
      fields: [
        {
          name: "Steam name:",
          value: "steam_name",
          inline: true,
        },
        {
          name: "Discord Id",
          value: "Discord Name",
          inline: true,
        },
        {
          name: "Steam HEX",
          value: "hex",
          inline: true,
        },
        {
          name: "Discord Identifier",
          value: "110011100011111",
          inline: true,
        },
        {
          name: "Age",
          value: "12",
          inline: true,
        },
        {
          name: "IRL Name",
          value: "ABc DEF",
          inline: true,
        },
        {
          name: "Character Name",
          value: "JBC",
        },
        {
          name: "Character backstory",
          value: "character backstory. eeverything",
        },
        {
          name: "Roleplay clip/ Stream link",
          value: "abc.com",
        },
      ],
      author: {
        name: "Introduction Part",
        icon_url:
          "https://static.wikia.nocookie.net/gtawiki/images/4/49/LesterCrest-GTAVee.png",
      },
      image: {
        url: "https://static.wikia.nocookie.net/gtawiki/images/4/49/LesterCrest-GTAVee.png",
      },
    },
    {
      color: 16716820,
      fields: [
        {
          name: "What does roleplay mean to you?",
          value: "meaning_roleplay",
        },
        {
          name: "Explain your best roleplay story experience so far",
          value: "story",
        },
        {
          name: "Give an example of No Value of Life",
          value: "fear rp",
        },
        {
          name: "What is combat logging?",
          value: "logging",
        },
        {
          name: "What is combat storing?",
          value: "storing",
        },
        {
          name: "Explain example of in-game meta",
          value: "in game meta",
        },
        {
          name: "What is the first thing you do upon entering server? Explain",
          value: "first_thing",
        },
      ],
      author: {
        name: "Roleplay Rule Part",
        icon_url:
          "https://i.pinimg.com/474x/6d/57/ae/6d57aef0ea538a31da935f36c621afae--auto--gta-online.jpg",
      },
      footer: {
        text: "Supreme Roleplay",
        icon_url:
          "https://i.pinimg.com/474x/6d/57/ae/6d57aef0ea538a31da935f36c621afae--auto--gta-online.jpg",
      },
      timestamp: "2023-02-24T12:30:00.000Z",
    },
  ],
  username: "Ring ring",
  avatar_url:
    "https://i.pinimg.com/originals/b6/97/2d/b6972d320611abaeb4e15c041667c939.jpg",
  attachments: [],
};

export const signupContentWebhook = {
  content: "Hello <@&1078649873127182386>, a new user signed up.",
  username: "Signup Bot",
  avatar_url:
    "https://i.pinimg.com/originals/b6/97/2d/b6972d320611abaeb4e15c041667c939.jpg",
  attachments: [],
};

export const validationSchemaWhitelist = Yup.object().shape({
  steamName: Yup.string().required("Steam Name is required"),
  discordId: Yup.string().required("Discord ID is required"),
  steamHex: Yup.string().required("Steam Hex is required"),
  discordIdentifier: Yup.string().required("Discord Identifier is required"),
  ageIrl: Yup.number()
    .required("Age is required")
    .min(16, "Age must be at least 16 years old"),
  nameIrl: Yup.string().required("Real Name is required"),
  charName: Yup.string().required("Character Name is required"),
  charBackstory: Yup.string()
    .required("Character Backstory is required")
    .test(
      "word-count",
      "Character Backstory must have at least 20 words",
      (value) => {
        if (value) {
          const words = value.trim().split(/\s+/).length;
          return words >= 20;
        } else {
          return true;
        }
      }
    ),
  steamHours: Yup.number().required("Steam Hours is required"),
  question1: Yup.string().required("This question is required"),
  question2: Yup.string().required("This question is required"),
  question3: Yup.string().required("This question is required"),
  question4: Yup.string().required("This question is required"),
  question5: Yup.string().required("This question is required"),
  question6: Yup.string().required("This question is required"),
  question7: Yup.string().required("This question is required"),
});

export function getTimeRequired(date) {
  // Convert date string to Date object
  const targetDate = new Date(date);

  // Add 5 days to the target date
  targetDate.setDate(targetDate.getDate() + 7);

  // Calculate the time difference between target date and current date
  const timeDiff = targetDate.getTime() - Date.now();

  // Convert time difference to days and hours
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // Return the result as a string
  return `${days} day(s) and ${hours} hour(s)`;
}

export function isDatePlusFiveDays(date) {
  // Convert date string to Date object
  const targetDate = new Date(date);

  // Add 5 days to the target date
  targetDate.setDate(targetDate.getDate() + 7);

  // Get the current date and time
  const currentDate = new Date();

  // Compare the target date plus 5 days to the current date and time
  return currentDate.getTime() === targetDate.getTime();
}
export const randomAcceptedImages = [
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080916854136111204/wha2.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080916668211015720/wha.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080917678891479070/Cat.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080918719502499902/Untitled_Meme_2_1.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080918821998702713/pussy.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080920079379734548/Spongy.gif",
  },
];
export const randomRejectedImages = [
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080923235555750008/kidcry.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080921986789810258/Spoidermen.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080921962299273226/Spongysad.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080921327088717895/Lady_gaga_ko_baba.gif",
  },
  {
    url: "https://cdn.discordapp.com/attachments/838025726695047258/1080920823063392327/Lady_gaaga.gif",
  },
];
