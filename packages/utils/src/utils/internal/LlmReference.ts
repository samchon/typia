import { ILlmSchema } from "@typia/interface";

import { ObjectDictionary } from "./ObjectDictionary";

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
    decode(PREFIX, reference);

  /** Decode one OpenAPI component reference into its component key. */
  export const readOpenApi = (reference: string): string | undefined =>
    decode(OPENAPI_PREFIX, reference);

  const encode = (key: string): string =>
    encodeURIComponent(key.replace(/~/g, "~0").replace(/\//g, "~1"));

  const decode = (prefix: string, reference: string): string | undefined => {
    if (reference.startsWith(prefix) === false) return undefined;
    const fragment: string = reference.slice(prefix.length);
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

    let key: string = "";
    for (let i: number = 0; i < token.length; ++i) {
      const character: string = token[i]!;
      if (character !== "~") {
        key += character;
        continue;
      }
      const escape: string | undefined = token[++i];
      if (escape === "0") key += "~";
      else if (escape === "1") key += "/";
      else return undefined;
    }
    return key;
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
