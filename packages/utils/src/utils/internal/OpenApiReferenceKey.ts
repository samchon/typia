import { ObjectDictionary } from "./ObjectDictionary";

/**
 * Reads the component key a local `$ref` names.
 *
 * A JSON Reference is a URI fragment holding a JSON Pointer (RFC 6901): the key
 * is the pointer's last token, with `~1` standing for `/` and `~0` for `~`,
 * possibly percent-encoded as a URI fragment. The converters and schema walkers
 * used to take the raw token as the key, so a component whose key needs
 * escaping was never found, and a 3.0 downgrade silently dropped its
 * nullability (samchon/typia#2408).
 *
 * The decoding follows RFC 6901 alone: any other character is itself, so a key
 * holding a space, as Swagger 2.0 allows and documents in the wild carry,
 * resolves as written. Only a `~` followed by anything but `0` or `1` is
 * malformed and names no component (samchon/typia#2412). The stricter
 * {@link LlmReference.readOpenApi}, which also rejects characters outside the
 * URI-fragment charset, stays the contract of typia's own emitted references.
 *
 * @internal
 */
export namespace OpenApiReferenceKey {
  /**
   * @param reference Local reference, like `#/components/schemas/A~1B`
   * @param prefix Prefix the key follows; without one, or when the reference
   *   does not start with it, the key is the last token
   * @returns The decoded key, like `A/B`, or `undefined` when the token is
   *   malformed
   */
  export const read = (
    reference: string,
    prefix?: string,
  ): string | undefined => decode(tokenize(reference, prefix));

  /**
   * @param dictionary Components of the referenced kind
   * @param reference Local reference into `dictionary`
   * @param prefix Prefix the key follows, as in {@link read}
   * @returns The referenced component
   */
  export const get = <T>(
    dictionary: Record<string, T> | undefined,
    reference: string,
    prefix?: string,
  ): T | undefined => find(dictionary, reference, prefix)?.value;

  /**
   * @param dictionary Components of the referenced kind
   * @param reference Local reference into `dictionary`
   * @param prefix Prefix the key follows, as in {@link read}
   * @returns The referenced component with the key it was found under, for a
   *   caller that derives another component's key from it
   */
  export const find = <T>(
    dictionary: Record<string, T> | undefined,
    reference: string,
    prefix?: string,
  ): { key: string; value: T } | undefined => {
    const key: string | undefined = read(reference, prefix);
    return key !== undefined && ObjectDictionary.has(dictionary, key)
      ? { key, value: dictionary![key] as T }
      : undefined;
  };

  /** RFC 6901 token decoding, after percent-decoding when that succeeds. */
  const decode = (token: string): string | undefined => {
    let text: string = token;
    try {
      text = decodeURIComponent(token);
    } catch {
      // a literal `%` outside an escape stays itself
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

  const tokenize = (reference: string, prefix: string | undefined): string =>
    prefix !== undefined && reference.startsWith(prefix)
      ? reference.slice(prefix.length)
      : (reference.split("/").pop() ?? "");
}
