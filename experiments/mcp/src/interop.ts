import typia, { tags } from "typia";

/**
 * Guards the shared rollup `esmExternals` fix against CJS externals.
 *
 * `typia.random` with a `Pattern` tag exercises `randexp` at runtime — a CJS
 * package whose `module.exports` is the callable default. It is consumed
 * through typia's bundled `.mjs`, so if treating externals as ESM had broken
 * callable CJS defaults, this would throw instead of producing a match.
 */
const value = typia.random<{
  code: string & tags.Pattern<"^[a-z]{3}[0-9]{2}$">;
}>();

if (!/^[a-z]{3}[0-9]{2}$/.test(value.code)) {
  throw new Error(`randexp interop failed: ${value.code}`);
}
console.log(`randexp (CJS external) interop ok: ${value.code}`);
