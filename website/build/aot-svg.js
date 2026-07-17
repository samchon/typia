/**
 * Generates public/images/concepts/transform.svg -- an SVG replica of the
 * landing page's "AOT Compilation Magic" A -> B comparison, for embedding in
 * the root README and the docs introduction, where a static image is the only
 * option.
 *
 *     node build/aot-svg.js public/images/concepts/transform.svg
 *
 * Referenced as https://typia.io/images/concepts/transform.svg from the README
 * (an absolute URL, so it survives being republished to npm) and
 * /images/concepts/transform.svg from the docs.
 *
 * This is a one-off asset generator, deliberately outside the `build:*`
 * pipeline: the artifact is committed and only needs regenerating when the
 * landing panels change.
 *
 * The code samples, palette, and tokenizer below are copied verbatim from
 * src/movies/HomeCompilationMovie.tsx and
 * src/components/home/HomeCodeHighlight.tsx so the SVG highlights exactly
 * like the page. Those two files are the source of truth -- if either
 * changes, re-copy and re-run, or the README will drift from the site.
 *
 * The SVG carries no background: on a white surface (landing section, docs
 * page, GitHub light) it matches the page pixel for pixel, and on GitHub
 * dark the panels keep their own ink fill instead of a white slab.
 */
const fs = require("fs");

// ── from HomeCompilationMovie.tsx ────────────────────────────────────────
const BEFORE_CODE = `import typia, { tags } from "typia";

interface IMember {
  id: string & tags.Format<"uuid">;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}

// just one line, with pure TypeScript type
const check: boolean = typia.is<IMember>(input);`;

const AFTER_CODE = `// compiled JavaScript — no schema overhead
((input) =>
  "object" === typeof input &&
  null !== input &&
  "string" === typeof input.id &&
  isFormatUuid(input.id) &&
  "string" === typeof input.email &&
  isFormatEmail(input.email) &&
  "number" === typeof input.age &&
  Number.isInteger(input.age) &&
  19 < input.age &&
  100 >= input.age)`;

// ── from HomeCodeHighlight.tsx (verbatim) ────────────────────────────────
const COLORS = {
  keyword: "#c586c0",
  declare: "#569cd6",
  string: "#ce9178",
  comment: "#6a9955",
  type: "#4ec9b0",
  number: "#b5cea8",
  func: "#dcdcaa",
  param: "#9cdcfe",
  operator: "#d4d4d4",
  bracket: "#ffd700",
  default: "#d4d4d4",
};
const KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "return",
  "if",
  "else",
  "throw",
  "await",
  "async",
  "new",
  "typeof",
  "instanceof",
  "in",
  "of",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "try",
  "catch",
  "finally",
  "default",
  "as",
  "extends",
  "implements",
]);
const DECLARES = new Set([
  "const",
  "let",
  "var",
  "function",
  "class",
  "interface",
  "type",
  "enum",
  "namespace",
  "module",
  "abstract",
  "readonly",
]);
const BUILTIN_TYPES = new Set([
  "string",
  "number",
  "boolean",
  "void",
  "null",
  "undefined",
  "never",
  "any",
  "unknown",
  "object",
  "true",
  "false",
  "Record",
  "Partial",
  "Required",
  "Array",
  "Promise",
  "Uint8Array",
  "FormData",
  "URLSearchParams",
]);

function tokenize(code) {
  const tokens = [];
  let i = 0;
  while (i < code.length) {
    if (code[i] === "/" && code[i + 1] === "/") {
      let end = code.indexOf("\n", i);
      if (end === -1) end = code.length;
      tokens.push({ type: "comment", value: code.slice(i, end) });
      i = end;
      continue;
    }
    if (code[i] === "/" && code[i + 1] === "*") {
      let end = code.indexOf("*/", i + 2);
      if (end === -1) end = code.length;
      else end += 2;
      tokens.push({ type: "comment", value: code.slice(i, end) });
      i = end;
      continue;
    }
    if (code[i] === '"') {
      let end = i + 1;
      while (end < code.length && code[end] !== '"') {
        if (code[end] === "\\") end++;
        end++;
      }
      end++;
      tokens.push({ type: "string", value: code.slice(i, end) });
      i = end;
      continue;
    }
    if (code[i] === "'") {
      let end = i + 1;
      while (end < code.length && code[end] !== "'") {
        if (code[end] === "\\") end++;
        end++;
      }
      end++;
      tokens.push({ type: "string", value: code.slice(i, end) });
      i = end;
      continue;
    }
    if (code[i] === "`") {
      let end = i + 1;
      while (end < code.length && code[end] !== "`") {
        if (code[end] === "\\") end++;
        end++;
      }
      end++;
      tokens.push({ type: "string", value: code.slice(i, end) });
      i = end;
      continue;
    }
    if (
      /[0-9]/.test(code[i]) &&
      (i === 0 || /[\s,;:(=<>!+\-*/&|^~\[\]\{]/.test(code[i - 1]))
    ) {
      let end = i;
      while (end < code.length && /[0-9._eExXa-fA-F]/.test(code[end])) end++;
      tokens.push({ type: "number", value: code.slice(i, end) });
      i = end;
      continue;
    }
    if (/[a-zA-Z_$]/.test(code[i])) {
      let end = i;
      while (end < code.length && /[a-zA-Z0-9_$]/.test(code[end])) end++;
      const word = code.slice(i, end);
      if (KEYWORDS.has(word)) tokens.push({ type: "keyword", value: word });
      else if (DECLARES.has(word))
        tokens.push({ type: "declare", value: word });
      else if (BUILTIN_TYPES.has(word))
        tokens.push({ type: "type", value: word });
      else if (end < code.length && code[end] === "(")
        tokens.push({ type: "func", value: word });
      else if (word[0] === word[0].toUpperCase() && /[a-z]/.test(word.slice(1)))
        tokens.push({ type: "type", value: word });
      else tokens.push({ type: "default", value: word });
      i = end;
      continue;
    }
    if (/\s/.test(code[i])) {
      let end = i;
      while (end < code.length && /\s/.test(code[end])) end++;
      tokens.push({ type: "operator", value: code.slice(i, end) });
      i = end;
      continue;
    }
    tokens.push({ type: "operator", value: code[i] });
    i++;
  }
  return tokens;
}
const COLOR_MAP = {
  keyword: COLORS.keyword,
  declare: COLORS.declare,
  string: COLORS.string,
  comment: COLORS.comment,
  type: COLORS.type,
  number: COLORS.number,
  func: COLORS.func,
  operator: COLORS.operator,
  default: COLORS.default,
};

// ── layout, mirroring the page's layout values ───────────────────────────
// The page renders code at 0.8rem (12.8px), but an embedded SVG is scaled to
// whatever column holds it, so what governs legibility is characters-per-line,
// not the raw font size -- raising FS alone just widens the figure and it gets
// downscaled by the same factor.
//
// Swapping the inlined regexes for isFormatUuid / isFormatEmail cut the widest
// line from 66 to 48 characters. The figure therefore keeps its original
// ~1200px footprint and spends the whole 1.375x saving on type:
// 12.8 * 66/48 = 17.6, rounded to 18. The code still fills each panel edge to
// edge -- panel width is derived from the longest line plus padding -- it is
// simply drawn larger.
//
//   FS    width   README(1012)   docs(832)
//   12.8    905      12.8           11.8
//   16     1090      14.9           12.2
//   18     1204      15.1           12.4
const FS = 18;
const LH = FS * 1.7; // lineHeight 1.7
const CW = FS * 0.6; // monospace advance
const PAD = 20; // p: 2.5
const HEADER_H = 46; // px 2.5 / py 1.5 header
const GAP = 24; // gap: 3
const ARROW_W = 40;
const PANEL_R = 8; // borderRadius: 2
const INK = "#0c1c32";
const BORDER = "#c1d3eb";
// rgba(255,255,255,0.03) over INK
const HEADER_BG = "#132338";
const HEADER_LINE = "#1f2f45";

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// split the flat token stream into lines, preserving token colors
function toLines(code) {
  const lines = [[]];
  for (const t of tokenize(code)) {
    const parts = t.value.split("\n");
    parts.forEach((p, idx) => {
      if (idx > 0) lines.push([]);
      if (p !== "") lines[lines.length - 1].push({ type: t.type, value: p });
    });
  }
  return lines;
}

function panel(x, y, w, h, label, labelFill, title, lines) {
  const out = [];
  out.push(
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${PANEL_R}" fill="${INK}" stroke="${BORDER}"/>`,
  );
  // header
  out.push(
    `<path d="M ${x} ${y + PANEL_R} a ${PANEL_R} ${PANEL_R} 0 0 1 ${PANEL_R} -${PANEL_R} h ${w - 2 * PANEL_R} a ${PANEL_R} ${PANEL_R} 0 0 1 ${PANEL_R} ${PANEL_R} v ${HEADER_H - PANEL_R} h -${w} Z" fill="${HEADER_BG}"/>`,
  );
  out.push(
    `<line x1="${x}" y1="${y + HEADER_H}" x2="${x + w}" y2="${y + HEADER_H}" stroke="${HEADER_LINE}"/>`,
  );
  // badge
  const bw = label.length * 7.2 + 20;
  out.push(
    `<rect x="${x + PAD}" y="${y + 13}" width="${bw}" height="20" rx="4" fill="${labelFill}"/>`,
  );
  out.push(
    `<text x="${x + PAD + bw / 2}" y="${y + 27}" fill="#ffffff" font-family="ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="11.2" font-weight="700" letter-spacing="0.5" text-anchor="middle">${esc(label.toUpperCase())}</text>`,
  );
  // title
  out.push(
    `<text x="${x + PAD + bw + 12}" y="${y + 27}" fill="#ffffff" fill-opacity="0.6" font-family="ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif" font-size="13" font-weight="500">${esc(title)}</text>`,
  );
  // code
  lines.forEach((toks, i) => {
    const ty = y + HEADER_H + PAD + FS + i * LH;
    const spans = toks
      .map(
        (t) =>
          `<tspan fill="${COLOR_MAP[t.type]}" xml:space="preserve">${esc(t.value)}</tspan>`,
      )
      .join("");
    out.push(
      `<text x="${x + PAD}" y="${ty.toFixed(2)}" font-family="ui-monospace,SFMono-Regular,Menlo,Consolas,Liberation Mono,monospace" font-size="${FS}" xml:space="preserve">${spans}</text>`,
    );
  });
  return out.join("\n  ");
}

const beforeLines = toLines(BEFORE_CODE);
const afterLines = toLines(AFTER_CODE);
const maxLen = (ls) =>
  Math.max(...ls.map((l) => l.reduce((n, t) => n + t.value.length, 0)));
const panelW =
  Math.ceil(Math.max(maxLen(beforeLines), maxLen(afterLines)) * CW + PAD * 2) +
  8;

// Side by side: input on the left, compiled output on the right, exactly as
// the landing page lays it out. Seeing both at once is the whole point of the
// figure, so the A/B pairing is never traded away for type size.
//
// No background rect: on a white surface (the landing section, the docs page,
// GitHub light) this is pixel-identical to the page, and on GitHub dark the
// panels keep their own ink fill instead of sitting on a white slab.
const rows = Math.max(beforeLines.length, afterLines.length);
const panelH = HEADER_H + PAD * 2 + rows * LH;
const W = panelW * 2 + GAP * 2 + ARROW_W;
const H = Math.ceil(panelH) + 8;

const leftX = 4;
const rightX = 4 + panelW + GAP + ARROW_W + GAP;
const arrowX = 4 + panelW + GAP + ARROW_W / 2;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="typia AOT compilation: the TypeScript source you write on the left, and the validator typia compiles it into on the right">
  ${panel(leftX, 4, panelW, panelH, "Input", "#0674c3", "Your TypeScript Code", beforeLines)}
  <text x="${arrowX}" y="${4 + panelH / 2 + 12}" fill="${BORDER}" font-family="ui-sans-serif,system-ui,sans-serif" font-size="34" text-anchor="middle">&#8594;</text>
  ${panel(rightX, 4, panelW, panelH, "Output", "#3e9711", "Compiled Output", afterLines)}
</svg>
`;

const out = process.argv[2];
fs.mkdirSync(require("path").dirname(out), { recursive: true });
fs.writeFileSync(out, svg, "utf8");
console.log(`wrote ${out}  (${W}x${H}, panel ${panelW} wide, code ${FS}px)`);
