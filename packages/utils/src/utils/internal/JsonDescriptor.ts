import { OpenApi } from "@typia/interface";

import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";
import { NamingConvention } from "../NamingConvention";
import { ObjectDictionary } from "./ObjectDictionary";

export namespace JsonDescriptor {
  /**
   * Describe a reference by its own description and its namespace ancestors'.
   *
   * A dot in a component key is read here as a namespace boundary, so
   * `IShoppingSale.ISummary` inherits the description of the `IShoppingSale`
   * component. Nothing in a rendered key distinguishes a real qualification
   * from one a producer invented, and this is handed documents typia did not
   * generate, so the reading cannot be verified from the key: every producer of
   * a key owes the invariant that its dots are the type's own qualification and
   * nothing else.
   *
   * typia's own producers keep it. `MetadataCollection.getName` joins a
   * duplicate's counter with `-o` and `MetadataCollection_replaceOpenApi`
   * rewrites a flattened nested type's dots, both in
   * `packages/typia/native/core/schemas/metadata/MetadataCollection.go`;
   * `OpenApiComponentName` joins an escaped key's counter with `-x`. Each
   * carries the same reason: a dot they minted would be inherited from here as
   * an unrelated type's prose, straight into what an LLM reads.
   */
  export const cascade = (props: {
    prefix: string;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IReference;
    escape: boolean;
    key?: string;
  }): string | undefined => {
    const accessors: string[] = (
      props.key ??
      props.schema.$ref.split(props.prefix)[1] ??
      props.schema.$ref.split("/").at(-1)!
    ).split(".");
    const pReferences: IParentReference[] = accessors
      .slice(0, props.escape ? accessors.length : accessors.length - 1)
      .map((_, i, array) => array.slice(0, i + 1).join("."))
      .map((key) => ({
        key,
        description: ObjectDictionary.get(props.components.schemas, key)
          ?.description,
      }))
      .reverse()
      .filter(
        (schema, i): schema is IParentReference =>
          i === 0 || !!schema?.description,
      );
    if (!props.schema.description?.length && pReferences.length === 0)
      return undefined;
    return [
      ...(!!props.schema.description?.length ? [props.schema.description] : []),
      ...pReferences.map((pRef, i) =>
        pRef.description === undefined
          ? `Current Type: {@link ${pRef.key}}`
          : `Description of the ${i === 0 && props.escape ? "current" : "parent"} {@link ${pRef.key}} type:\n\n` +
            pRef.description
              .split("\n")
              .map((str) => `> ${str}`)
              .join("\n"),
      ),
    ].join("\n\n------------------------------\n\n");
  };

  export const take = (o: OpenApi.IJsonSchema.IObject): string | undefined => {
    const result: string = [
      ...(!!o.description?.length ? [o.description] : []),
      ...Object.entries(o.properties ?? {})
        .filter(
          ([_key, value]) =>
            OpenApiTypeChecker.isReference(value) &&
            !!value.description?.length,
        )
        .map(
          ([key, value]) =>
            `### Description of {@link ${NamingConvention.variable(key) ? key : JSON.stringify(key)}} property:\n\n` +
            (value.description ?? "")
              .split("\n")
              .map((str) => `> ${str}`)
              .join("\n"),
        ),
    ].join("\n\n");
    return !!result.length ? result : undefined;
  };
}

interface IParentReference {
  key: string;
  description: string | undefined;
}
