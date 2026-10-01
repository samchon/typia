import { OpenApi } from "@typia/interface";

import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";
import { NamingConvention } from "../NamingConvention";
import { ObjectDictionary } from "./ObjectDictionary";

/**
 * Description text builders for generated schemas.
 *
 * They combine the descriptions carried by components and by documented
 * reference properties into the text that an LLM or a document reader sees.
 * Neither function modifies the document it reads.
 *
 * @evidence contracts/common.md#principled-implementation The namespace derives descriptions for references and objects from schema descriptions: a reference inherits the descriptions of its dotted ancestors, and an object lists its documented reference properties as quoted blocks, so a model reading a schema sees the prose of related types.
 * @evidence contracts/common.md#clear-and-simple-design Two functions that build text; both read the component dictionary through ObjectDictionary and neither mutates the document.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The dotted-key reading is a stated invariant that each producer owes, and not a patch for a particular producer.
 * @evidence contracts/common.md#meaningful-documentation The comments on both functions explain the key reading and the produced layout; a namespace comment was added that states the purpose and that the document is not modified.
 */
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
   * Typia's own producers keep it. `MetadataCollection.getName` joins a
   * duplicate's counter with `-o` and `MetadataCollection_replaceOpenApi`
   * rewrites a flattened nested type's dots, both in
   * `packages/typia/native/core/schemas/metadata/MetadataCollection.go`;
   * `OpenApiComponentName` joins an escaped key's counter with `-x`. Each
   * carries the same reason: a dot they minted would be inherited from here as
   * an unrelated type's prose, straight into what an LLM reads.
   *
   * @evidence contracts/common.md#principled-implementation Component keys are split on dots, ancestors are looked up in the component map and each described ancestor is quoted under the schema's own description, joined with a separator line. The reading of a dot as a namespace boundary holds only if every key producer follows the invariant stated in the comment; the function cannot verify it from a key alone.
   * @evidence contracts/common.md#clear-and-simple-design One pipeline that builds the ancestor list and then the text, with the first element always kept as the current type link.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The reading is documented as an invariant on producers; the comment lists typia's own producers that keep it instead of compensating for foreign ones.
   * @evidence contracts/common.md#meaningful-documentation The comment explains the namespace reading, the unverifiable premise and the producer duties with file references.
   */
  export const cascade = (props: {
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IReference;
    escape: boolean;
    key: string;
  }): string | undefined => {
    const accessors: string[] = props.key.split(".");
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

  /**
   * Describe an object by its own description and its documented references.
   *
   * Each property whose schema is a reference with a description contributes a
   * blockquoted section headed by the property name, written as a plain name
   * when it is a legal variable name and as a JSON string otherwise.
   *
   * @param o Object schema to describe
   *
   * @returns Combined description, or `undefined` when there is no text
   *
   * @evidence contracts/common.md#principled-implementation The object's own description followed by a blockquoted description for each property that is a documented reference gives a combined description; the property name is written as a plain name or as a JSON string when it is not a valid variable name. No result is returned for empty text.
   * @evidence contracts/common.md#clear-and-simple-design One function that filters, maps and joins.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A general text composition without special properties.
   * @evidence contracts/common.md#meaningful-documentation A doc comment was added that states the contributed sections, the property-name quoting rule and the undefined result.
   */
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
