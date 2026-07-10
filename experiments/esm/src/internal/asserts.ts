/** Throws with a `FAIL:` prefix so the runner exits non-zero on any miss. */
export const check = (label: string, condition: boolean): void => {
  if (!condition) throw new Error(`FAIL: ${label}`);
  console.log(`  ok  ${label}`);
};
