import sharp from "sharp";

export const processGradient = async (buffer: Buffer) => {
  const d = sharp(buffer, {
    create: {
      noise: {
        type: "gaussian",
        mean: 128,
        sigma: 30,
      },
    },
  });
};

// await sharp({
//     create: {
//       width: 300,
//       height: 200,
//       channels: 3,
//       noise: {
//         type: "gaussian",
//         mean: 128,
//         sigma: 30,
//       },
//     },
//   });
