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
 * converter already use.
 *
 * Documents in the wild also write unescaped keys into references, so lookups
 * try the decoded key first and fall back to the raw token. That leniency
 * belongs to the converters and the schema walkers, which always read raw
 * tokens. The validators and the LLM converter keep rejecting a malformed
 * reference through {@link LlmReference.readOpenApi}, a deliberate integrity
 * contract (samchon/typia#2104).
 *
 * @internal
 */
export namespace OpenApiReferenceKey {
  /**
   * @param reference Local reference, like `#/components/schemas/A~1B`
   * @param prefix Prefix the key follows; without one, or when the reference
   *   does not start with it, the key is the last token
   * @returns The decoded key, like `A/B`, or the raw token when it does not
   *   decode
   */
  export const read = (reference: string, prefix?: string): string => {
    const token: string = tokenize(reference, prefix);
    return LlmReference.readToken(token) ?? token;
  };

  /**
   * @param dictionary Components of the referenced kind
   * @param reference Local reference into `dictionary`
   * @param prefix Prefix the key follows, as in {@link read}
   * @returns The referenced component, found by its decoded key or else by the
   *   raw token
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
    const token: string = tokenize(reference, prefix);
    for (const key of [LlmReference.readToken(token), token])
      if (key !== undefined && ObjectDictionary.has(dictionary, key))
        return { key, value: dictionary![key] as T };
    return undefined;
  };

  const tokenize = (reference: string, prefix: string | undefined): string =>
    prefix !== undefined && reference.startsWith(prefix)
      ? reference.slice(prefix.length)
      : (reference.split("/").pop() ?? "");
}
