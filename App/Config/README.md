This directory contains configuration variables in 3 files:
- `index.dev.ts` : contains development variables
- `index.production.ts` : contains production variables
- `index.staging.ts` : contains beta tests variables

You need to create `index.ts` by copying the right file.

#### Warning
Each time you need to build, you need to verify if your `index.ts` is the right one.
For example, during development, before building your app do:
```
cp App\Config\index.dev.ts App\Config\index.ts
```
In other environment, you must pay attention to change your `index.ts` with the good one.
Also, make sure you add each configuration variable in each configuration file.

#### Usage
```
import Config from 'App/Config'

...
let uri = Config.API_URL
...

```
