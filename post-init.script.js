#!/usr/bin/env node

const fs = require('fs')
fs.copyFile('src/Config/index.example.ts', 'src/Config/index.ts', (err) => {
  if (err) throw err
  console.log('src/Config/index.example.ts was copied to src/Config/index.ts')
})

console.log('TheCodingMachine React-Native Boilerplate initialized with success !')
console.log(
  '' +
    '                                                                    .-`    `::  \n' +
    ' `/////////////     `/shhhy+-   ://.        /sy/                   /ss/   :NMN: \n' +
    ' `sssssyhhhyhhy:` `yMMMMNNMMMd. osss:     `hMMMh-    .-`         `+ss:   +MMm/. \n' +
    '      :MMM+----. `mMMm+:-`.oo/` osssyo`  `dMMMMh-   ohhh-       `oyy+-  sMMd/.  \n' +
    '      :MMM+`     oMMN/-         osssyhs`.mMMMMMh-   -hds`      .syy+- `hMMh:`   \n' +
    '      :MMM+`     hMMd:          oss-ohhhMMMhdMMh-    `.       +NNm/. .dMMy:`    \n' +
    '      :MMM+`     oMMN/          oss-`shdMMd:dMMh-    :-`     sMMd/. -NMMo-      \n' +
    '      :MMM+`     `mMMm/`  `/+:. oss- `sdMd:.hMMh-   hMys-  `hMMh:` -hdy-`       \n' +
    '      :MMM+`      `yMMMMdssss+  oss.  `oh/- hMMh-   -hyo:  dMMs:` -ss+`         \n' +
    '      .oys:`        .+yhyo/-    -::`    ``  -syo-     ..`  +mo-   `//           \n' +
    '        ``             ```                    ``            `.                  '
)

console.log(
  '- If you need to read more about this boilerplate : https://thecodingmachine.github.io/react-native-boilerplate/'
)
console.log(
  '- If you have some troubles : https://github.com/ozanmanav/react-native-boilerplate-ts/issues'
)
console.log(
  '- If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/ozanmanav/react-native-boilerplate-ts'
)
