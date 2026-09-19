/**
 * JSON Pointer token rules (RFC 6901).
 *
 * @internal
 */
export namespace JsonPointer {
  /**
   * Unescape one reference token: `~1` stands for `/` and `~0` for `~`, and
   * every other character is itself.
   *
   * @param token Reference token, after any URI decoding
   * @returns The token's text, or `undefined` when a `~` is followed by
   *   anything but `0` or `1`
   */
  export const unescape = (token: string): string | undefined => {
    let text: string = "";
    for (let i: number = 0; i < token.length; ++i) {
      const character: string = token[i]!;
      if (character !== "~") {
        text += character;
        continue;
      }
      const escape: string | undefined = token[++i];
      if (escape === "0") text += "~";
      else if (escape === "1") text += "/";
      else return undefined;
    }
    return text;
  };

  /** Escape one text as a reference token: `~` to `~0`, then `/` to `~1`. */
  export const escape = (text: string): string =>
    text.replace(/~/g, "~0").replace(/\//g, "~1");
}
