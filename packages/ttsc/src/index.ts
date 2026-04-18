/**
 * @typia/ttsc — public TypeScript entry.
 *
 * Phase 0: exports platform-detection helpers so external tooling (e.g. the
 * typia CLI's `npx typia setup --runtime=ttsc`) can invoke the same logic the
 * launcher uses without spawning the binary.
 */

export * from "./platform";
