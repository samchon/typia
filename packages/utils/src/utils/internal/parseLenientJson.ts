import { DeepPartial, IJsonParseResult } from "@typia/interface";

/**
 * Parse lenient JSON that may be incomplete or malformed.
 *
 * Handles:
 *
 * - Unclosed brackets `{`, `[` - parses as much as possible
 * - Trailing commas `[1, 2, ]` - ignores them
 * - Unclosed strings `"hello` - returns partial string
 * - Junk text before JSON (LLM often adds explanatory text)
 * - Markdown code blocks (extracts content from `json ... `)
 * - Incomplete keywords like `tru`, `fal`, `nul`
 * - Unicode escape sequences including surrogate pairs (emoji)
 * - JavaScript-style comments (single-line and multi-line)
 * - Unquoted object keys (JavaScript identifier style)
 *
 * @param input Raw JSON string (potentially incomplete)
 * @returns Parse result with data, original input, and any errors
 * @internal
 */
export function parseLenientJson<T>(input: string): IJsonParseResult<T> {
  // Try native JSON.parse first (faster for valid JSON)
  try {
    return {
      success: true,
      data: JSON.parse(input) as T,
    };
  } catch {
    // Fall back to lenient parser
  }

  // Extract markdown code block if present
  const codeBlockContent: string | null = extractMarkdownCodeBlock(input);
  const jsonSource: string =
    codeBlockContent !== null ? codeBlockContent : input;

  // Check if input is empty or whitespace-only
  const trimmed: string = jsonSource.trim();
  if (trimmed.length === 0) {
    const errors: IJsonParseResult.IError[] = [];
    const parser: LenientJsonParser = new LenientJsonParser(jsonSource, errors);
    const data: unknown = parser.parse();
    if (errors.length > 0) {
      return { success: false, data: data as DeepPartial<T>, input, errors };
    }
    return { success: true, data: data as T };
  }

  // Check if input starts with a primitive value (no junk prefix skipping needed)
  if (startsWithPrimitive(trimmed)) {
    const errors: IJsonParseResult.IError[] = [];
    const parser: LenientJsonParser = new LenientJsonParser(jsonSource, errors);
    const data: unknown = parser.parse();
    if (errors.length > 0) {
      return { success: false, data: data as DeepPartial<T>, input, errors };
    }
    return { success: true, data: data as T };
  }

  // Find JSON start position (skip junk prefix from LLM)
  const jsonStart: number = findJsonStart(jsonSource);
  if (jsonStart === -1) {
    // No JSON found - return empty object for lenient behavior
    return {
      success: true,
      data: {} as T,
    };
  }

  // Extract JSON portion (skip junk prefix)
  const jsonInput: string =
    jsonStart > 0 ? jsonSource.slice(jsonStart) : jsonSource;

  const errors: IJsonParseResult.IError[] = [];
  const parser: LenientJsonParser = new LenientJsonParser(jsonInput, errors);
  const data: unknown = parser.parse();

  if (errors.length > 0) {
    return {
      success: false,
      data: data as DeepPartial<T>,
      input,
      errors,
    };
  }
  return {
    success: true,
    data: data as T,
  };
}

/**
 * Maximum nesting depth to prevent stack overflow attacks.
 *
 * @internal
 */
const MAX_DEPTH: number = 512;

/**
 * Check if a string is a valid 4-character hexadecimal string.
 *
 * @internal
 */
function isHexString(s: string): boolean {
  if (s.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    const c: number = s.charCodeAt(i);
    if (
      !((c >= 48 && c <= 57) || (c >= 65 && c <= 70) || (c >= 97 && c <= 102))
    ) {
      return false;
    }
  }
  return true;
}

/**
 * Extract JSON content from markdown code block if present.
 *
 * LLM outputs often wrap JSON in markdown code blocks like:
 *
 *     Here is your result:
 *
 *     ```json
 *     { "name": "test" }
 *     ```
 *
 * This function extracts the content between the backticks.
 *
 * IMPORTANT: Only extracts if the input doesn't already start with JSON. If
 * input (after trim) starts with `{`, `[`, or `"`, it's already JSON and any
 * markdown inside is part of a string value.
 *
 * @param input Text that may contain markdown code block
 * @returns Extracted content or null if no code block found
 * @internal
 */
function extractMarkdownCodeBlock(input: string): string | null {
  // Must be ```json specifically, not just ```
  const codeBlockStart: number = input.indexOf("```json");
  if (codeBlockStart === -1) return null;

  // Check if input already starts with JSON (after trimming whitespace)
  // If so, don't extract - the markdown is inside a JSON string value
  const trimmed: string = input.trimStart();
  if (trimmed.length > 0) {
    const firstChar: string = trimmed[0]!;
    if (firstChar === "{" || firstChar === "[" || firstChar === '"') {
      return null;
    }
  }

  // Find the end of the opening line (after ```json)
  let contentStart: number = codeBlockStart + 7; // length of "```json"
  while (contentStart < input.length && input[contentStart] !== "\n") {
    contentStart++;
  }
  if (contentStart >= input.length) return null;
  contentStart++; // skip the newline

  // Find the closing ```
  const codeBlockEnd: number = input.indexOf("```", contentStart);
  if (codeBlockEnd === -1) {
    // No closing ``` - return everything after opening
    return input.slice(contentStart);
  }

  return input.slice(contentStart, codeBlockEnd);
}

/**
 * Find the start position of JSON object/array content in text that may have
 * junk prefix.
 *
 * LLM outputs often contain text before JSON like:
 *
 * - "Here is your JSON: {"name": "test"}"
 * - "Sure! [1, 2, 3]"
 *
 * This function only looks for `{` or `[` to skip junk prefix. Primitive values
 * (strings, numbers, booleans) are handled directly by the parser.
 *
 * @param input Text that may contain JSON with junk prefix
 * @returns Index of first `{` or `[`, or -1 if not found
 * @internal
 */
function findJsonStart(input: string): number {
  const objStart: number = input.indexOf("{");
  const arrStart: number = input.indexOf("[");

  if (objStart === -1 && arrStart === -1) return -1;
  if (objStart === -1) return arrStart;
  if (arrStart === -1) return objStart;
  return Math.min(objStart, arrStart);
}

/**
 * Check if input starts with a valid JSON primitive token.
 *
 * @param input Trimmed input string
 * @returns True if input starts with a primitive value
 * @internal
 */
function startsWithPrimitive(input: string): boolean {
  if (input.length === 0) return false;
  const ch: string = input[0]!;
  // String
  if (ch === '"') return true;
  // Number (digit or minus)
  if ((ch >= "0" && ch <= "9") || ch === "-") return true;
  // Keywords
  if (
    input.startsWith("true") ||
    input.startsWith("false") ||
    input.startsWith("null")
  )
    return true;
  // Partial keywords
  if (
    "true".startsWith(input) ||
    "false".startsWith(input) ||
    "null".startsWith(input)
  )
    return true;
  return false;
}

/**
 * Lenient JSON parser that handles incomplete JSON.
 *
 * @internal
 */
class LenientJsonParser {
  private pos: number = 0;
  private depth: number = 0;
  private readonly input: string;
  private readonly errors: IJsonParseResult.IError[];

  constructor(input: string, errors: IJsonParseResult.IError[]) {
    this.input = input;
    this.errors = errors;
  }

  parse(): unknown {
    this.skipWhitespace();
    if (this.pos >= this.input.length) {
      return undefined;
    }
    return this.parseValue("$input");
  }

  private parseValue(path: string): unknown {
    this.skipWhitespace();

    if (this.pos >= this.input.length) {
      return undefined;
    }

    // Check for maximum depth to prevent stack overflow
    if (this.depth >= MAX_DEPTH) {
      this.errors.push({
        path,
        expected: "value (max depth exceeded)",
        value: undefined,
      });
      return undefined;
    }

    const char: string = this.input[this.pos]!;

    if (char === "{") return this.parseObject(path);
    if (char === "[") return this.parseArray(path);
    if (char === '"') return this.parseString();
    if (char === "-" || (char >= "0" && char <= "9")) return this.parseNumber();

    // Handle keywords (true, false, null) or invalid identifiers
    if (this.isIdentifierStart(char)) {
      return this.parseKeywordOrIdentifier(path);
    }

    this.errors.push({
      path,
      expected: "JSON value",
      value: this.getErrorContext(),
    });
    // Skip the problematic character and try to continue
    this.pos++;
    return undefined;
  }

  private getErrorContext(): string {
    // Get surrounding context for better error messages
    const start: number = Math.max(0, this.pos - 10);
    const end: number = Math.min(this.input.length, this.pos + 20);
    const before: string = this.input.slice(start, this.pos);
    const after: string = this.input.slice(this.pos, end);
    return (
      (start > 0 ? "..." : "") +
      before +
      "→" +
      after +
      (end < this.input.length ? "..." : "")
    );
  }

  private parseKeywordOrIdentifier(path: string): unknown {
    // Extract the token (sequence of identifier characters)
    const start: number = this.pos;
    while (
      this.pos < this.input.length &&
      this.isIdentifierChar(this.input[this.pos]!)
    ) {
      this.pos++;
    }
    const token: string = this.input.slice(start, this.pos);

    // Check for complete or partial keyword matches
    if (token === "true") return true;
    if (token === "false") return false;
    if (token === "null") return null;

    // Partial match for lenient parsing (e.g., "tru" -> true, "fal" -> false)
    if ("true".startsWith(token) && token.length > 0) return true;
    if ("false".startsWith(token) && token.length > 0) return false;
    if ("null".startsWith(token) && token.length > 0) return null;

    // Check if this looks like a string with missing opening quote (e.g., abcdefg")
    if (this.pos < this.input.length && this.input[this.pos] === '"') {
      // Treat as unquoted string value - skip the errant closing quote and return as string
      this.pos++; // skip the closing quote
      this.errors.push({
        path,
        expected: "quoted string",
        value: "missing opening quote for '" + token + "'",
      });
      return token;
    }

    // Invalid identifier as value - provide helpful error message
    this.errors.push({
      path,
      expected: "JSON value (string, number, boolean, null, object, or array)",
      value: "unquoted string '" + token + "' - did you forget quotes?",
    });
    // Skip to next comma, closing brace/bracket for recovery
    this.skipToRecoveryPoint();
    return undefined;
  }

  private skipToRecoveryPoint(): void {
    while (this.pos < this.input.length) {
      const ch: string = this.input[this.pos]!;
      if (ch === "," || ch === "}" || ch === "]") {
        return;
      }
      this.pos++;
    }
  }

  private parseObject(path: string): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    this.pos++; // skip '{'
    this.depth++;
    this.skipWhitespace();

    while (this.pos < this.input.length) {
      this.skipWhitespace();

      // Handle end of object or end of input
      if (this.pos >= this.input.length || this.input[this.pos] === "}") {
        if (this.pos < this.input.length) this.pos++; // skip '}'
        this.depth--;
        return result;
      }

      // Skip trailing comma
      if (this.input[this.pos] === ",") {
        this.pos++;
        this.skipWhitespace();
        continue;
      }

      // Parse key (quoted string or unquoted identifier)
      let key: string;
      if (this.input[this.pos] === '"') {
        key = this.parseString();
      } else if (this.isIdentifierStart(this.input[this.pos]!)) {
        key = this.parseIdentifier();
      } else {
        this.errors.push({
          path,
          expected: "string key",
          value: this.input[this.pos],
        });
        // Try to recover by skipping to next meaningful character
        this.depth--;
        return result;
      }
      if (typeof key !== "string") {
        this.depth--;
        return result;
      }

      this.skipWhitespace();

      // Expect colon - but if we're at end of input, it's just incomplete (not an error)
      if (this.pos >= this.input.length) {
        this.depth--;
        return result;
      }
      if (this.input[this.pos] !== ":") {
        this.errors.push({
          path: path + "." + key,
          expected: "':'",
          value: this.input[this.pos],
        });
        this.depth--;
        return result;
      }
      this.pos++; // skip ':'

      this.skipWhitespace();

      // Parse value
      if (this.pos >= this.input.length) {
        // No value - incomplete but not an error for lenient parsing
        this.depth--;
        return result;
      }

      const value: unknown = this.parseValue(path + "." + key);
      result[key] = value;

      this.skipWhitespace();

      // Handle comma or end
      if (this.pos < this.input.length && this.input[this.pos] === ",") {
        this.pos++;
      }
    }

    this.depth--;
    return result;
  }

  private parseArray(path: string): unknown[] {
    const result: unknown[] = [];
    this.pos++; // skip '['
    this.depth++;
    this.skipWhitespace();

    let index: number = 0;
    while (this.pos < this.input.length) {
      this.skipWhitespace();

      // Handle end of array or end of input
      if (this.pos >= this.input.length || this.input[this.pos] === "]") {
        if (this.pos < this.input.length) this.pos++; // skip ']'
        this.depth--;
        return result;
      }

      // Skip trailing comma
      if (this.input[this.pos] === ",") {
        this.pos++;
        this.skipWhitespace();
        continue;
      }

      // Parse value
      const value: unknown = this.parseValue(path + "[" + index + "]");
      result.push(value);
      index++;

      this.skipWhitespace();

      // Handle comma or end
      if (this.pos < this.input.length && this.input[this.pos] === ",") {
        this.pos++;
      }
    }

    this.depth--;
    return result;
  }

  private parseString(): string {
    this.pos++; // skip opening '"'
    let result: string = "";
    let escaped: boolean = false;

    while (this.pos < this.input.length) {
      const char: string = this.input[this.pos]!;

      if (escaped) {
        switch (char) {
          case '"':
            result += '"';
            break;
          case "\\":
            result += "\\";
            break;
          case "/":
            result += "/";
            break;
          case "b":
            result += "\b";
            break;
          case "f":
            result += "\f";
            break;
          case "n":
            result += "\n";
            break;
          case "r":
            result += "\r";
            break;
          case "t":
            result += "\t";
            break;
          case "u":
            // Parse unicode escape
            if (this.pos + 4 <= this.input.length) {
              const hex: string = this.input.slice(this.pos + 1, this.pos + 5);
              if (isHexString(hex)) {
                const highCode: number = parseInt(hex, 16);
                this.pos += 4;

                // Check for surrogate pair (emoji and characters > U+FFFF)
                if (
                  highCode >= 0xd800 &&
                  highCode <= 0xdbff &&
                  this.pos + 6 <= this.input.length &&
                  this.input[this.pos + 1] === "\\" &&
                  this.input[this.pos + 2] === "u"
                ) {
                  const lowHex: string = this.input.slice(
                    this.pos + 3,
                    this.pos + 7,
                  );
                  if (isHexString(lowHex)) {
                    const lowCode: number = parseInt(lowHex, 16);
                    if (lowCode >= 0xdc00 && lowCode <= 0xdfff) {
                      result += String.fromCharCode(highCode, lowCode);
                      this.pos += 6;
                      break;
                    }
                  }
                }
                result += String.fromCharCode(highCode);
              } else {
                // Invalid hex - preserve escape sequence literally
                result += "\\u" + hex;
                this.pos += 4;
              }
            } else {
              // Incomplete unicode escape - add partial sequence
              const partial: string = this.input.slice(this.pos + 1);
              result += "\\u" + partial;
              this.pos = this.input.length - 1;
            }
            break;
          default:
            result += char;
        }
        escaped = false;
        this.pos++;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        this.pos++;
        continue;
      }

      if (char === '"') {
        this.pos++; // skip closing '"'
        return result;
      }

      result += char;
      this.pos++;
    }

    // Unclosed string - return what we have (lenient)
    return result;
  }

  private parseNumber(): number {
    const start: number = this.pos;

    // Handle negative sign
    if (this.input[this.pos] === "-") {
      this.pos++;
    }

    // Parse integer part
    while (
      this.pos < this.input.length &&
      this.input[this.pos]! >= "0" &&
      this.input[this.pos]! <= "9"
    ) {
      this.pos++;
    }

    // Parse decimal part
    if (this.pos < this.input.length && this.input[this.pos] === ".") {
      this.pos++;
      while (
        this.pos < this.input.length &&
        this.input[this.pos]! >= "0" &&
        this.input[this.pos]! <= "9"
      ) {
        this.pos++;
      }
    }

    // Parse exponent
    if (
      this.pos < this.input.length &&
      (this.input[this.pos] === "e" || this.input[this.pos] === "E")
    ) {
      this.pos++;
      if (
        this.pos < this.input.length &&
        (this.input[this.pos] === "+" || this.input[this.pos] === "-")
      ) {
        this.pos++;
      }
      while (
        this.pos < this.input.length &&
        this.input[this.pos]! >= "0" &&
        this.input[this.pos]! <= "9"
      ) {
        this.pos++;
      }
    }

    const numStr: string = this.input.slice(start, this.pos);
    const num: number = Number(numStr);
    return Number.isNaN(num) ? 0 : num;
  }

  private isIdentifierStart(ch: string): boolean {
    return (
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z") ||
      ch === "_" ||
      ch === "$"
    );
  }

  private isIdentifierChar(ch: string): boolean {
    return (
      (ch >= "a" && ch <= "z") ||
      (ch >= "A" && ch <= "Z") ||
      (ch >= "0" && ch <= "9") ||
      ch === "_" ||
      ch === "$"
    );
  }

  private parseIdentifier(): string {
    const start: number = this.pos;
    while (
      this.pos < this.input.length &&
      this.isIdentifierChar(this.input[this.pos]!)
    ) {
      this.pos++;
    }
    return this.input.slice(start, this.pos);
  }

  private skipWhitespace(): void {
    while (this.pos < this.input.length) {
      const ch: string = this.input[this.pos]!;

      // Skip standard whitespace
      if (ch === " " || ch === "\t" || ch === "\n" || ch === "\r") {
        this.pos++;
        continue;
      }

      // Skip single-line comment: // ...
      if (
        ch === "/" &&
        this.pos + 1 < this.input.length &&
        this.input[this.pos + 1] === "/"
      ) {
        this.pos += 2;
        while (
          this.pos < this.input.length &&
          this.input[this.pos] !== "\n" &&
          this.input[this.pos] !== "\r"
        ) {
          this.pos++;
        }
        continue;
      }

      // Skip multi-line comment: /* ... */
      if (
        ch === "/" &&
        this.pos + 1 < this.input.length &&
        this.input[this.pos + 1] === "*"
      ) {
        this.pos += 2;
        while (this.pos + 1 < this.input.length) {
          if (
            this.input[this.pos] === "*" &&
            this.input[this.pos + 1] === "/"
          ) {
            this.pos += 2;
            break;
          }
          this.pos++;
        }
        // Handle unclosed comment - move to end
        if (this.pos + 1 >= this.input.length) {
          this.pos = this.input.length;
        }
        continue;
      }

      // Not whitespace or comment
      break;
    }
  }
}
