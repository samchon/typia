"use client";

import React, { ReactNode } from "react";

// VS Code Dark+ inspired colors
const COLORS = {
  keyword: "#c586c0",     // import, from, const, interface, type, export, return, if, await, async, new
  declare: "#569cd6",     // const, let, var, function, class
  string: "#ce9178",      // "...", '...', `...`
  comment: "#6a9955",     // // ...
  type: "#4ec9b0",        // type names after : or generic
  number: "#b5cea8",      // numeric literals
  func: "#dcdcaa",        // function calls
  param: "#9cdcfe",       // parameters, variables
  operator: "#d4d4d4",    // = , ; . etc
  bracket: "#ffd700",     // < > for generics
  default: "#d4d4d4",
};

const KEYWORDS = new Set([
  "import", "from", "export", "return", "if", "else", "throw",
  "await", "async", "new", "typeof", "instanceof", "in", "of",
  "for", "while", "do", "switch", "case", "break", "continue",
  "try", "catch", "finally", "default", "as", "extends", "implements",
]);

const DECLARES = new Set([
  "const", "let", "var", "function", "class", "interface", "type",
  "enum", "namespace", "module", "abstract", "readonly",
]);

const BUILTIN_TYPES = new Set([
  "string", "number", "boolean", "void", "null", "undefined",
  "never", "any", "unknown", "object", "true", "false",
  "Record", "Partial", "Required", "Array", "Promise",
  "Uint8Array", "FormData", "URLSearchParams",
]);

interface Token {
  type: "keyword" | "declare" | "string" | "comment" | "type" | "number" | "func" | "operator" | "default";
  value: string;
}

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    // Line comments
    if (code[i] === "/" && code[i + 1] === "/") {
      let end = code.indexOf("\n", i);
      if (end === -1) end = code.length;
      tokens.push({ type: "comment", value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Block comments
    if (code[i] === "/" && code[i + 1] === "*") {
      let end = code.indexOf("*/", i + 2);
      if (end === -1) end = code.length;
      else end += 2;
      tokens.push({ type: "comment", value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Strings (double quote)
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

    // Strings (single quote)
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

    // Template literals
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

    // Numbers
    if (/[0-9]/.test(code[i]) && (i === 0 || /[\s,;:(=<>!+\-*/&|^~[\]{]/.test(code[i - 1]))) {
      let end = i;
      while (end < code.length && /[0-9._eExXa-fA-F]/.test(code[end])) end++;
      tokens.push({ type: "number", value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Identifiers and keywords
    if (/[a-zA-Z_$]/.test(code[i])) {
      let end = i;
      while (end < code.length && /[a-zA-Z0-9_$]/.test(code[end])) end++;
      const word = code.slice(i, end);

      if (KEYWORDS.has(word)) {
        tokens.push({ type: "keyword", value: word });
      } else if (DECLARES.has(word)) {
        tokens.push({ type: "declare", value: word });
      } else if (BUILTIN_TYPES.has(word)) {
        tokens.push({ type: "type", value: word });
      } else if (end < code.length && code[end] === "(") {
        // Function call
        tokens.push({ type: "func", value: word });
      } else if (word[0] === word[0].toUpperCase() && /[a-z]/.test(word.slice(1))) {
        // PascalCase — likely a type
        tokens.push({ type: "type", value: word });
      } else {
        tokens.push({ type: "default", value: word });
      }
      i = end;
      continue;
    }

    // Whitespace
    if (/\s/.test(code[i])) {
      let end = i;
      while (end < code.length && /\s/.test(code[end])) end++;
      tokens.push({ type: "operator", value: code.slice(i, end) });
      i = end;
      continue;
    }

    // Operators and punctuation
    tokens.push({ type: "operator", value: code[i] });
    i++;
  }

  return tokens;
}

const COLOR_MAP: Record<Token["type"], string> = {
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

const HomeCodeHighlight = (props: { children: string }) => {
  const tokens = tokenize(props.children);
  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} style={{ color: COLOR_MAP[token.type] }}>
          {token.value}
        </span>
      ))}
    </>
  );
};
export default HomeCodeHighlight;
