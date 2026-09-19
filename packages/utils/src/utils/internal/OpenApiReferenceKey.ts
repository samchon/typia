import { JsonPointer } from "./JsonPointer";
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
 * resolves as written (samchon/typia#2412). A reference names no component when
 * a `~` is followed by anything but `0` or `1`, or when the token still holds a
 * `/` after percent-decoding, which RFC 6901 reads as one more pointer step.
 * Every reader of an emended document, the walkers, the converters, the
 * validators, and the LLM composers, resolves a reference through this one
 * reader, so they agree on the component it names (samchon/typia#2416). The
 * `#/$defs/` references of an LLM schema keep their own reader in
 * `LlmReference.read`.
 *
 * @internal
 */
export namespace OpenApiReferenceKey {
  /**
   * @param reference Local reference, like `#/components/schemas/A~1B`
   * @param prefix Prefix the key must follow; without one, the key is the last
   *   token
   * @returns The decoded key, like `A/B`, or `undefined` when the reference
   *   does not follow the prefix or its token is malformed
   */
  export const read = (
    reference: string,
    prefix?: string,
  ): string | undefined => {
    const token: string | undefined = tokenize(reference, prefix);
    return token === undefined ? undefined : decode(token);
  };

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

  /**
   * RFC 6901 token unescaping, after percent-decoding when that succeeds.
   *
   * A `/` that survives percent-decoding is a pointer separator, so the token
   * was not one token.
   */
  const decode = (token: string): string | undefined => {
    let text: string = token;
    try {
      text = decodeURIComponent(token);
    } catch {
      // a literal `%` outside an escape stays itself
    }
    return text.includes("/") ? undefined : JsonPointer.unescape(text);
  };

  const tokenize = (
    reference: string,
    prefix: string | undefined,
  ): string | undefined =>
    prefix === undefined
      ? (reference.split("/").pop() ?? "")
      : reference.startsWith(prefix)
        ? reference.slice(prefix.length)
        : undefined;
}
