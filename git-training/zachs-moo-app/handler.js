"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: ` _______________
        < Zachs moosage >
         ---------------
        \                             .       .
         \                           / \.   .' "
          \                  .---.  <    > <    >  .---.
           \                 |    \  \ - ~ ~ - /  /    |
                 _____          ..-~             ~-..-~
                |     |   \~~~\.'                    \./~~~/
               ---------   \__/                        \__/
              .'  o    \     /               /       \  "
             (_____,    \._.'               |         }  \/~~~/
              \----.          /       }     |        /    \__/
                    \-.      |       /      |       /      \. ,~~|
                        ~-.__|      /_ - ~ ^|      /- _      \..-‘ / \  /\
                             |     /        |     /     ~-.     \-/ _ \/__\
                             |_____|        |_____|         ~ - . _ _ _ _ _>`,
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
