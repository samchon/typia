import { resolveOptions, transformTypia } from "@typia/unplugin/api";

import { getFixtureID, readFixture, root } from "./_utils.js";

type TransformTypiaParameters = Parameters<typeof transformTypia>;

export default async function setup(): Promise<void> {
  const id = getFixtureID("alias.ts");
  const code = await readFixture("alias.ts");
  await transformTypia(
    id as TransformTypiaParameters[0],
    code as TransformTypiaParameters[1],
    { warn: () => undefined } as TransformTypiaParameters[2],
    resolveOptions({ cache: false }),
    [
      {
        find: "@",
        replacement: root,
      },
    ],
  );
}
