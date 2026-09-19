import { ILlmSchema } from "@typia/interface";

import { JsonPointer } from "./JsonPointer";
import { ObjectDictionary } from "./ObjectDictionary";
import { OpenApiReferenceKey } from "./OpenApiReferenceKey";

/** @internal */
export namespace LlmReference {
  export const PREFIX = "#/$defs/" as const;
  export const OPENAPI_PREFIX = "#/components/schemas/" as const;

  export interface IResolved {
    key: string;
    schema: ILlmSchema;
  }

  /** Encode one unrestricted `$defs` key as a local URI-fragment reference. */
  export const write = (key: string): `#/$defs/${string}` =>
    `${PREFIX}${encode(key)}`;

  /** Encode one component key as an OpenAPI local URI-fragment reference. */
  export const writeOpenApi = (key: string): `#/components/schemas/${string}` =>
    `${OPENAPI_PREFIX}${encode(key)}`;

  /** Decode one supported local URI-fragment reference into its `$defs` key. */
  export const read = (reference: string): string | undefined =>
    reference.startsWith(PREFIX)
      ? readToken(reference.slice(PREFIX.length))
      : undefined;

  /**
   * Decode one OpenAPI component reference into its component key.
   *
   * An OpenAPI document is read as the walkers and converters read it, by
   * {@link OpenApiReferenceKey}, so every consumer of the document resolves a
   * reference alike (samchon/typia#2416). The `$defs` reader stays stricter
   * because typia writes those references itself.
   */
  export const readOpenApi = (reference: string): string | undefined =>
    OpenApiReferenceKey.read(reference, OPENAPI_PREFIX);

  const encode = (key: string): string =>
    encodeURIComponent(JsonPointer.escape(key));

  /**
   * Decode one JSON Pointer token written as a URI fragment: percent-encoding,
   * then `~1` and `~0`.
   *
   * @param fragment Token as written in the reference
   * @returns The component key, or `undefined` when the fragment is malformed
   */
  export const readToken = (fragment: string): string | undefined => {
    if (
      /^(?:[A-Za-z0-9._~!$&'()*+,;=:@?-]|%[0-9A-Fa-f]{2})*$/.test(fragment) ===
      false
    )
      return undefined;

    let token: string;
    try {
      token = decodeURIComponent(fragment);
    } catch {
      return undefined;
    }
    if (token.includes("/")) return undefined;
    return JsonPointer.unescape(token);
  };

  /** Resolve one supported local reference without flattening its target. */
  export const resolve = (
    $defs: Record<string, ILlmSchema> | undefined,
    reference: string,
  ): IResolved | undefined => {
    const key: string | undefined = read(reference);
    if (key === undefined) return undefined;
    const schema: ILlmSchema | undefined = ObjectDictionary.get($defs, key);
    return schema === undefined ? undefined : { key, schema };
  };

  /**
   * Flatten a reference-only chain, rejecting malformed, missing, or cyclic
   * aliases.
   */
  export const dereference = (
    $defs: Record<string, ILlmSchema> | undefined,
    schema: ILlmSchema,
  ): ILlmSchema | undefined => {
    const visited: Set<string> = new Set();
    while ("$ref" in schema) {
      const resolved: IResolved | undefined = resolve($defs, schema.$ref);
      if (resolved === undefined || visited.has(resolved.key)) return undefined;
      visited.add(resolved.key);
      schema = resolved.schema;
    }
    return schema;
  };
}
