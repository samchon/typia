import { ObjectDictionary } from "./ObjectDictionary";

/**
 * Reads the component key a local `$ref` names.
 *
 * A reference such as `#/components/schemas/A~1B` names its component by one
 * JSON Pointer token, which escapes `~` and `/` as `~0` and `~1` and may also
 * be percent-encoded as a URI fragment. The converters used to take the raw
 * last token as the key, so a component whose key needs escaping was never
 * found, and a 3.0 downgrade silently dropped its nullability
 * (samchon/typia#2408).
 *
 * Documents in the wild also write unescaped keys into references, so lookups
 * try the decoded key first and fall back to the raw token.
 *
 * @internal
 */
export namespace OpenApiReferenceKey {
  /**
   * @param reference Local reference, like `#/components/schemas/A~1B`
   * @returns The decoded key, like `A/B`, or the raw last token when it does
   *   not decode
   */
  export const read = (reference: string): string => {
    const token: string = reference.split("/").pop() ?? "";
    return decode(token) ?? token;
  };

  /**
   * @param dictionary Components of the referenced kind
   * @param reference Local reference into `dictionary`
   * @returns The referenced component, found by its decoded key or else by the
   *   raw token
   */
  export const get = <T>(
    dictionary: Record<string, T> | undefined,
    reference: string,
  ): T | undefined => find(dictionary, reference)?.value;

  /**
   * @param dictionary Components of the referenced kind
   * @param reference Local reference into `dictionary`
   * @returns The referenced component with the key it was found under, for a
   *   caller that derives another component's key from it
   */
  export const find = <T>(
    dictionary: Record<string, T> | undefined,
    reference: string,
  ): { key: string; value: T } | undefined => {
    const token: string = reference.split("/").pop() ?? "";
    for (const key of [decode(token), token])
      if (key !== undefined && ObjectDictionary.has(dictionary, key))
        return { key, value: dictionary![key] as T };
    return undefined;
  };

  const decode = (token: string): string | undefined => {
    let text: string;
    try {
      text = decodeURIComponent(token);
    } catch {
      return undefined;
    }
    let key: string = "";
    for (let i: number = 0; i < text.length; ++i) {
      const character: string = text[i]!;
      if (character !== "~") {
        key += character;
        continue;
      }
      const escape: string | undefined = text[++i];
      if (escape === "0") key += "~";
      else if (escape === "1") key += "/";
      else return undefined;
    }
    return key;
  };
}
