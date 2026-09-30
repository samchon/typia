/**
 * Locates prohibited assertion-oracle uses in maintained test source.
 *
 * @evidence contracts/common.md#principled-implementation Comment blanking preserves source offsets and line breaks before matching forbidden oracle access and aliases; literal delimiters cannot hide subsequent code, but this lexical policy is not proof against arbitrary deliberate evasion.
 * @evidence contracts/common.md#clear-and-simple-design One public scan composes the private comment lexer and one policy expression; repository enumeration and fixture expectations remain separate consumers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The matcher enforces declared oracle restrictions uniformly across source files, without exceptions for known fixtures or patching the foreign assertion implementation.
 * @evidence contracts/common.md#meaningful-documentation The namespace describes the lexical scope and limitation; the scanner and lexer explain line preservation, literal delimiters and the absence of a TypeScript 7 JavaScript parser API.
 */
export namespace AssertionOracle {
  /**
   * One-based lines where `text` reaches `TestValidator.equals` or
   * `TestValidator.error`.
   *
   * Comments are blanked first, keeping their line breaks, so prose that names
   * the function is not a use. Recognized member and alias spellings are
   * reported; this lexical check does not resolve arbitrary runtime access.
   *
   * @evidence contracts/common.md#principled-implementation The scan retains newline positions while blanking comments, then returns one-based lines for forbidden accesses; comments and permitted siblings are excluded by the lexical and member-name rules.
   * @evidence contracts/common.md#clear-and-simple-design The exported function contains only lexer composition and diagnostic location calculation; the private lexer owns literal/comment state and the constant expression owns prohibited spellings.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Matching depends on source syntax rather than file names or expected report values, and it neither executes nor replaces TestValidator methods.
   * @evidence contracts/common.md#meaningful-documentation The function comment defines one-based locations and comment treatment; the lexer records its TypeScript 7 tool boundary and delimiter assumptions.
   */
  export const find = (text: string): number[] => {
    const code: string = blank(text);
    const output: number[] = [];
    for (const match of code.matchAll(PATTERN))
      output.push(code.slice(0, match.index).split("\n").length);
    return output;
  };

  /**
   * Blanks every comment, keeping line breaks.
   *
   * A comment opener inside a string, a template, or a regular expression is
   * text, not a comment: a URL's `//` or a `"/*"` literal must not hide the
   * code after it. A `/` starts a regular expression when the previous
   * significant character cannot end an operand, the usual lexer heuristic.
   *
   * This is a lexer, not a parser, on purpose. The repository compiles with
   * TypeScript 7, whose compiler is native and ships no JavaScript parser API;
   * the only `typescript` 5 in the tree is the website's transitive dependency
   * (#2414). Scanning the text is therefore the tool the contract offers, and
   * the planted cases above are what keep it honest.
   */
  const blank = (text: string): string => {
    const output: string[] = text.split(""); // UTF-16 units, as indexed
    const erase = (from: number, to: number): void => {
      for (let k: number = from; k < to; ++k)
        if (output[k] !== "\n") output[k] = " ";
    };
    const templates: number[] = []; // brace depth of each open `${`
    let previous: string = "";
    let i: number = 0;
    const skipQuoted = (quote: string): void => {
      for (++i; i < text.length && text[i] !== quote; ++i)
        if (text[i] === "\\") ++i;
        else if (text[i] === "\n" && quote !== "`") break;
      ++i;
    };
    const skipTemplate = (): void => {
      for (; i < text.length; ++i)
        if (text[i] === "\\") ++i;
        else if (text[i] === "`") {
          ++i;
          return;
        } else if (text[i] === "$" && text[i + 1] === "{") {
          templates.push(0);
          i += 2;
          return;
        }
    };
    while (i < text.length) {
      const c: string = text[i]!;
      const n: string | undefined = text[i + 1];
      if (c === "/" && n === "/") {
        const end: number = text.indexOf("\n", i);
        const to: number = end === -1 ? text.length : end;
        erase(i, to);
        i = to;
      } else if (c === "/" && n === "*") {
        const end: number = text.indexOf("*/", i + 2);
        const to: number = end === -1 ? text.length : end + 2;
        erase(i, to);
        i = to;
      } else if (c === "'" || c === '"') {
        skipQuoted(c);
        previous = c;
      } else if (c === "`") {
        ++i;
        skipTemplate();
        previous = c;
      } else if (
        c === "/" &&
        (previous === "" || /[(,=:[!&|?{};+\-*%<>~^]/.test(previous))
      ) {
        let klass: boolean = false;
        for (++i; i < text.length && text[i] !== "\n"; ++i)
          if (text[i] === "\\") ++i;
          else if (text[i] === "[") klass = true;
          else if (text[i] === "]") klass = false;
          else if (text[i] === "/" && klass === false) break;
        ++i;
        previous = "/";
      } else {
        if (templates.length !== 0 && c === "{")
          ++templates[templates.length - 1]!;
        else if (templates.length !== 0 && c === "}") {
          if (templates[templates.length - 1] === 0) {
            templates.pop();
            ++i;
            skipTemplate();
            previous = "`";
            continue;
          }
          --templates[templates.length - 1]!;
        }
        if (/\s/.test(c) === false) previous = c;
        ++i;
      }
    }
    return output.join("");
  };

  /**
   * Any member access to `equals` or `error` on `TestValidator`, through a cast
   * or optional chaining included, a destructuring of either, or a renaming
   * import or alias declaration (`const T = TestValidator;`, `import T =
   * TestValidator;`) that would hide the name from the rest of the pattern.
   */
  const PATTERN =
    /\bTestValidator\b(?:\s*\)|\s+as\s+[\w.<>]+)*\s*(?:\??\.\s*(?:equals|error)\b|(?:\?\.)?\s*\[\s*["'`](?:equals|error)["'`]\s*\])|\{[^}]*\b(?:equals|error)\b[^}]*\}\s*=\s*\(?\s*TestValidator\b|\bimport\s*(?:type\s*)?\{[^}]*\bTestValidator\s+as\b|\b(?:const|let|var|import)\s+[A-Za-z_$][\w$]*\s*(?::[^=;\n]+)?=\s*TestValidator\s*;/g;
}
