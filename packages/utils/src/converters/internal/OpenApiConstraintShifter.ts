import { OpenApi } from "@typia/interface";

import { OpenApiExclusiveEmender } from "./OpenApiExclusiveEmender";

/**
 * Moves constraint keywords of a schema into tags of its description.
 *
 * Strict LLM schemas cannot carry these keywords, so each one is written as a
 * `@name value` line and deleted from the schema. `LlmDescriptionInverter`
 * reads the tags back. The functions modify the schema they receive.
 *
 * @evidence contracts/common.md#principled-implementation Each keyword a strict LLM schema cannot hold is written as one `@name value` line after the description and deleted from the schema, so no information is lost for a reader that parses the tags back; the numeric shifter first removes a redundant inclusive or exclusive bound.
 * @evidence contracts/common.md#clear-and-simple-design Three shifters share one description writer and one bound settler.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The shifters mutate the schema they receive and say so; callers pass copies.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment states the tag format, the inverse reader and the mutation.
 */
export namespace OpenApiConstraintShifter {
  /**
   * Shift `minItems`, `maxItems` and `uniqueItems` into the description.
   *
   * @param schema Array schema, modified in place
   *
   * @returns The same schema without the shifted keywords
   *
   * @evidence contracts/common.md#principled-implementation The item bounds become tags, and `uniqueItems` becomes a bare tag only when it is true; the keyword is removed in every case.
   * @evidence contracts/common.md#clear-and-simple-design One function over four array keywords.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Mutation of the argument is stated.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result.
   */
  export const shiftArray = <
    Schema extends Pick<
      OpenApi.IJsonSchema.IArray,
      "description" | "minItems" | "maxItems" | "uniqueItems"
    >,
  >(
    schema: Schema,
  ): Omit<Schema, "minItems" | "maxItems" | "uniqueItems"> => {
    const tags: string[] = [];
    if (schema.minItems !== undefined) {
      tags.push(`@minItems ${schema.minItems}`);
      delete schema.minItems;
    }
    if (schema.maxItems !== undefined) {
      tags.push(`@maxItems ${schema.maxItems}`);
      delete schema.maxItems;
    }
    if (schema.uniqueItems !== undefined) {
      if (schema.uniqueItems === true) tags.push(`@uniqueItems`);
      delete schema.uniqueItems;
    }
    schema.description = writeTagWithDescription({
      description: schema.description,
      tags,
    });
    return schema;
  };

  /**
   * Shift bounds, `multipleOf` and `default` into the description, after
   * settling a redundant pair of inclusive and exclusive bounds.
   *
   * @param schema Number or integer schema, modified in place
   *
   * @returns The same schema without the shifted keywords
   *
   * @evidence contracts/common.md#principled-implementation After the bounds are settled, the bounds, multipleOf and default become tags and are removed, so a numeric constraint survives as text.
   * @evidence contracts/common.md#clear-and-simple-design One function over six numeric keywords.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Mutation of the argument is stated.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result.
   */
  export const shiftNumeric = <
    Schema extends Pick<
      OpenApi.IJsonSchema.INumber | OpenApi.IJsonSchema.IInteger,
      | "description"
      | "minimum"
      | "maximum"
      | "exclusiveMinimum"
      | "exclusiveMaximum"
      | "multipleOf"
      | "default"
    >,
  >(
    schema: Schema,
  ): Omit<
    Schema,
    | "minimum"
    | "maximum"
    | "exclusiveMinimum"
    | "exclusiveMaximum"
    | "multipleOf"
    | "default"
  > => {
    Object.assign(schema, OpenApiExclusiveEmender.emend(schema));

    const tags: string[] = [];
    if (schema.minimum !== undefined) {
      tags.push(`@minimum ${schema.minimum}`);
      delete schema.minimum;
    }
    if (schema.maximum !== undefined) {
      tags.push(`@maximum ${schema.maximum}`);
      delete schema.maximum;
    }
    if (schema.exclusiveMinimum !== undefined) {
      tags.push(`@exclusiveMinimum ${schema.exclusiveMinimum}`);
      delete schema.exclusiveMinimum;
    }
    if (schema.exclusiveMaximum !== undefined) {
      tags.push(`@exclusiveMaximum ${schema.exclusiveMaximum}`);
      delete schema.exclusiveMaximum;
    }
    if (schema.multipleOf !== undefined) {
      tags.push(`@multipleOf ${schema.multipleOf}`);
      delete schema.multipleOf;
    }
    if (schema.default !== undefined) {
      tags.push(`@default ${schema.default}`);
      delete schema.default;
    }
    schema.description = writeTagWithDescription({
      description: schema.description,
      tags,
    });
    return schema;
  };

  /**
   * Shift length, format, pattern, content type and default into the
   * description.
   *
   * @param schema String schema, modified in place
   *
   * @returns The same schema without the shifted keywords
   *
   * @evidence contracts/common.md#principled-implementation Length bounds, format, pattern, content type and default become tags and are removed.
   * @evidence contracts/common.md#clear-and-simple-design One function over six string keywords.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Mutation of the argument is stated.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result.
   */
  export const shiftString = <
    Schema extends Pick<
      OpenApi.IJsonSchema.IString,
      | "description"
      | "minLength"
      | "maxLength"
      | "format"
      | "pattern"
      | "contentMediaType"
      | "default"
    >,
  >(
    schema: Schema,
  ): Omit<
    Schema,
    | "minLength"
    | "maxLength"
    | "format"
    | "pattern"
    | "contentMediaType"
    | "default"
  > => {
    const tags: string[] = [];
    if (schema.minLength !== undefined) {
      tags.push(`@minLength ${schema.minLength}`);
      delete schema.minLength;
    }
    if (schema.maxLength !== undefined) {
      tags.push(`@maxLength ${schema.maxLength}`);
      delete schema.maxLength;
    }
    if (schema.format !== undefined) {
      tags.push(`@format ${schema.format}`);
      delete schema.format;
    }
    if (schema.pattern !== undefined) {
      tags.push(`@pattern ${schema.pattern}`);
      delete schema.pattern;
    }
    if (schema.contentMediaType !== undefined) {
      tags.push(`@contentMediaType ${schema.contentMediaType}`);
      delete schema.contentMediaType;
    }
    if (schema.default !== undefined) {
      tags.push(`@default ${schema.default}`);
      delete schema.default;
    }
    schema.description = writeTagWithDescription({
      description: schema.description,
      tags,
    });
    return schema;
  };
}

const writeTagWithDescription = (props: {
  description: string | undefined;
  tags: string[];
}): string | undefined => {
  if (props.tags.length === 0) return props.description;
  return [
    ...(props.description?.length ? [props.description, "\n"] : []),
    ...props.tags,
  ].join("\n");
};
