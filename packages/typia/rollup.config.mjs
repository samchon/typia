import esmShim from "@rollup/plugin-esm-shim";

import shared from "../../config/rollup.config.mjs";

// Some sources rely on the CJS globals `__dirname`/`__filename` (e.g.
// `executable/TypiaGenerateWizard.ts`). They run as CJS today, but esm-shim
// derives those globals from `import.meta.url` in the `.mjs` output too, so a
// single source stays correct whether the CJS or ESM build is loaded.
export default {
  ...shared,
  plugins: [esmShim(), ...shared.plugins],
};
