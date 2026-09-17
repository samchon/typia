import * as Diff from "diff-match-patch-es";
import MagicString from "magic-string";

/**
 * Replay the `source` -> `code` diff onto a {@link MagicString}, so that the
 * plugin can hand the bundler a source map pointing back at the original file.
 *
 * The transform output is the truth: the replay only exists to carry position
 * mappings, so the rebuilt string must come out character-identical to `code`.
 * Every deleted hunk is therefore replaced over its whole range.
 *
 * An earlier revision started the replacement at the first non-whitespace
 * character of the deleted hunk. That left the original whitespace standing in
 * front of the generated text and welded it onto the next token, splitting
 * `===` into `= ==` (https://github.com/samchon/typia/issues/2391). The `\n`
 * special case that once guarded this
 * (https://github.com/ryoppippi/unplugin-typia/issues/434) only covered the
 * newline half of the same defect, so the skip is gone entirely.
 */
export function buildMagicString(source: string, code: string): MagicString {
  /** Generate Magic string */
  const s = new MagicString(source);

  /** Generate diff */
  const diff = Diff.diff(source, code);

  /** Cleanup diff */
  Diff.diffCleanupSemantic(diff);

  let offset = 0;
  for (let index = 0; index < diff.length; index++) {
    const [type, text] = diff[index];
    const textLength = text.length;
    /** Skip */
    if (type === 0) {
      /* offset is increased  */
      offset += textLength;
    } else if (type === 1) {
      /** Add text */
      s.prependLeft(offset, text);

      /* offset is not increased because text is prepended */
    } else if (type === -1) {
      /** Remove text */
      const next = diff.at(index + 1);

      /** If next is equal to 1, then overwrite */
      if (next != null && next[0] === 1) {
        s.update(offset, offset + textLength, next[1]);

        /** Skip next */
        index += 1;
      } else {
        s.remove(offset, offset + textLength);
      }

      /* offset is increased  */
      offset += textLength;
    }
  }

  return s;
}

if (import.meta.vitest != null) {
  /**
   * The reconstruction is only a source-map carrier, so whatever comes out of
   * it has to be the transform output verbatim.
   */
  const rebuild = (source: string, code: string) =>
    buildMagicString(source, code).toString();

  test("rebuild the transform output verbatim", () => {
    const source = `export const sanitize = route<Req, Res>(\n  {\n    method: "GET",\n  },\n);\n`;
    const code = `export const sanitize = ((input) => {\n  for (const key in input) if ("accountId" === key) return;\n})(input);\n`;
    expect(rebuild(source, code)).toBe(code);
  });

  test("keep `===` intact when the diff splits it after a lone `=` (#2391)", () => {
    // Deleted hunk starts with a space, replacement does not: the old
    // leading-whitespace skip left that space in and emitted `= ==`.
    expect(rebuild("= r", "===")).toBe("===");
    expect(rebuild("= r", "===")).not.toContain("= ==");
  });

  test("keep a deleted hunk's leading newline out of the output (#434)", () => {
    // Same defect, newline half: the output used to gain a stray `\n`, which
    // broke string literals across lines.
    expect(rebuild("\nu", "a")).toBe("a");
  });

  test("leave an unchanged source untouched", () => {
    const source = `export const answer = 42;\n`;
    const s = buildMagicString(source, source);
    expect(s.hasChanged()).toBe(false);
    expect(s.toString()).toBe(source);
  });

  test("rebuild verbatim across generated diff shapes", () => {
    // Deterministic sweep: the shipped skip missed ~7% of these.
    const atoms = [
      " ",
      "\n",
      "  ",
      "===",
      "==",
      "=",
      "!==",
      "key",
      "input",
      `"accountId"`,
      "if (",
      ")",
      "{",
      "}",
      "return;",
      "const ",
      "export ",
      ";",
      "typia",
      ".misc.prune",
      "<Res>",
      "(input as Res)",
      "route<Req, Res>(",
      ",",
      "foo",
    ];
    let seed = 12345;
    const rnd = () =>
      (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
    const gen = (n: number) =>
      Array.from(
        { length: n },
        () => atoms[Math.floor(rnd() * atoms.length)],
      ).join("");

    for (let i = 0; i < 2000; i++) {
      const source = gen(5 + Math.floor(rnd() * 30));
      const at = Math.floor(rnd() * source.length);
      const code =
        source.slice(0, at) +
        gen(1 + Math.floor(rnd() * 4)) +
        source.slice(at + Math.floor(rnd() * 20));
      if (code === "" || source === code) {
        continue;
      }
      expect(rebuild(source, code), `source=${JSON.stringify(source)}`).toBe(
        code,
      );
    }
  });
}
