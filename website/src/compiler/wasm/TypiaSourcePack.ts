// Loads the real typia + @typia/interface + @typia/utils source files into
// the in-browser MemFS, so the wasm-side compiler can resolve
// `import typia from "typia"` against the same code the published package
// uses.
//
// The pack itself is built by `website/build/typia-pack.js` and served from
// `/compiler/typia-pack.json` (path → file content). We mount everything
// under `/work/node_modules/...`.

import type { IMemFSHost } from "./MemFS";

export const TYPIA_PACK_URL = "/compiler/typia-pack.json";
const MOUNT_ROOT = "/work/node_modules";

let cached: Promise<Record<string, string>> | null = null;

export async function loadTypiaPack(): Promise<Record<string, string>> {
  if (cached) return cached;
  cached = (async () => {
    const response = await fetch(TYPIA_PACK_URL);
    if (!response.ok) {
      throw new Error(
        `TypiaSourcePack: failed to fetch ${TYPIA_PACK_URL}: ${response.status}`,
      );
    }
    return (await response.json()) as Record<string, string>;
  })();
  return cached;
}

export async function installTypiaPack(host: IMemFSHost): Promise<void> {
  const pack = await loadTypiaPack();
  host.mkdirp(MOUNT_ROOT);
  for (const [rel, content] of Object.entries(pack)) {
    host.writeFile(`${MOUNT_ROOT}/${rel}`, content);
  }
}
