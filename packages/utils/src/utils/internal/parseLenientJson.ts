import { IValidation } from "@typia/interface";

/**
 * Maximum nesting depth to prevent stack overflow attacks.
 * @internal
 */
const MAX_DEPTH: number = 512;

/**
 * Check if a string is a valid 4-character hexadecimal string.
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
 * Find the start position of JSON object/array content in text that may have junk prefix.
 *
 * LLM outputs often contain text before JSON like:
 * - "Here is your JSON: {"name": "test"}"
 * - "Sure! [1, 2, 3]"
 *
 * This function only looks for `{` or `[` to skip junk prefix.
 * Primitive values (strings, numbers, booleans) are handled directly by the parser.
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
  if (input.startsWith("true") || input.startsWith("false") || input.startsWith("null")) return true;
  // Partial keywords
  if ("true".startsWith(input) || "false".startsWith(input) || "null".startsWith(input)) return true;
  return false;
}

/**
 * Parse lenient JSON that may be incomplete or malformed.
 *
 * Handles:
 *
 * - Unclosed brackets `{`, `[` - parses as much as possible
 * - Trailing commas `[1, 2, ]` - ignores them
 * - Unclosed strings `"hello` - returns partial string
 * - Junk text before JSON (LLM often adds explanatory text)
 * - Incomplete keywords like `tru`, `fal`, `nul`
 * - Unicode escape sequences including surrogate pairs (emoji)
 * - JavaScript-style comments (single-line and multi-line)
 * - Unquoted object keys (JavaScript identifier style)
 *
 * @param input Raw JSON string (potentially incomplete)
 * @returns Validation result with parsed data or syntax errors
 * @internal
 */
export function parseLenientJson<T>(input: string): IValidation<T> {
  // Try native JSON.parse first (faster for valid JSON)
  try {
    return {
      success: true,
      data: JSON.parse(input) as T,
    };
  } catch {
    // Fall back to lenient parser
  }

  // Check if input is empty or whitespace-only
  const trimmed: string = input.trim();
  if (trimmed.length === 0) {
    const errors: IValidation.IError[] = [];
    const parser: LenientJsonParser = new LenientJsonParser(input, errors);
    const data: unknown = parser.parse();
    if (errors.length > 0) {
      return { success: false, data, errors };
    }
    return { success: true, data: data as T };
  }

  // Check if input starts with a primitive value (no junk prefix skipping needed)
  if (startsWithPrimitive(trimmed)) {
    const errors: IValidation.IError[] = [];
    const parser: LenientJsonParser = new LenientJsonParser(input, errors);
    const data: unknown = parser.parse();
    if (errors.length > 0) {
      return { success: false, data, errors };
    }
    return { success: true, data: data as T };
  }

  // Find JSON start position (skip junk prefix from LLM)
  const jsonStart: number = findJsonStart(input);
  if (jsonStart === -1) {
    // No JSON found - return empty object for lenient behavior
    return {
      success: true,
      data: {} as T,
    };
  }

  // Extract JSON portion (skip junk prefix)
  const jsonInput: string = jsonStart > 0 ? input.slice(jsonStart) : input;

  const errors: IValidation.IError[] = [];
  const parser: LenientJsonParser = new LenientJsonParser(jsonInput, errors);
  const data: unknown = parser.parse();

  if (errors.length > 0) {
    return {
      success: false,
      data,
      errors,
    };
  }
  return {
    success: true,
    data: data as T,
  };
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
  private readonly errors: IValidation.IError[];

  constructor(input: string, errors: IValidation.IError[]) {
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

    // Handle keywords (true, false, null) including incomplete ones
    if (char === "t" || char === "f" || char === "n") {
      return this.parseKeyword(path);
    }

    this.errors.push({
      path,
      expected: "JSON value",
      value: char,
    });
    // Skip the problematic character and try to continue
    this.pos++;
    return undefined;
  }

  private parseKeyword(path: string): boolean | null | undefined {
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

    // Invalid keyword - reset position and report error
    this.pos = start + 1;
    this.errors.push({
      path,
      expected: "true, false, or null",
      value: token.slice(0, 10),
    });
    return undefined;
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
