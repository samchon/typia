import { OpenApi } from "../OpenApi";
import { OpenApiExclusiveEmender } from "./OpenApiExclusiveEmender";

export namespace OpenApiConstraintShifter {
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
    Object.assign(OpenApiExclusiveEmender.emend(schema));

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
    schema.description = writeTagWithDescription({
      description: schema.description,
      tags,
    });
    if (schema.default !== undefined) {
      tags.push(`@default ${schema.default}`);
      delete schema.default;
    }
    return schema;
  };

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
