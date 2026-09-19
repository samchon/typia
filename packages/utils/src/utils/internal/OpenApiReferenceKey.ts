import { LlmReference } from "./LlmReference";
import { ObjectDictionary } from "./ObjectDictionary";

/**
 * Reads the component key a local `$ref` names.
 *
 * A reference such as `#/components/schemas/A~1B` names its component by one
 * JSON Pointer token, which escapes `~` and `/` as `~0` and `~1` and may also
 * be percent-encoded as a URI fragment. The converters and schema walkers used
 * to take the raw token as the key, so a component whose key needs escaping was
 * never found, and a 3.0 downgrade silently dropped its nullability
 * (samchon/typia#2408). The token decodes through
 * {@link LlmReference.readToken}, the decoder the validators and the LLM
 * converter already use, so every path agrees on what a reference names.
 *
 * OpenAPI 3.x limits a component key to `^[a-zA-Z0-9._-]+$`, under which
 * escaping changes nothing, so decoding is transparent for every conforming
 * document. A malformed token names no component (samchon/typia#2412).
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
  ): string | undefined => LlmReference.readToken(tokenize(reference, prefix));

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

  const tokenize = (reference: string, prefix: string | undefined): string =>
    prefix !== undefined && reference.startsWith(prefix)
      ? reference.slice(prefix.length)
      : (reference.split("/").pop() ?? "");
}
