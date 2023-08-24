import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_array =
    (options: JsonApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (array: MetadataArray) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema.IArray => {
        // SCHEMA
        const schema: IJsonSchema.IArray = {
            ...attribute,
            type: "array",
            items: application_schema(options)(false)(components)(
                array.type.value,
            )(attribute),
        };

        // COMMENT TAGS
        for (const tag of attribute["x-typia-metaTags"] ?? [])
            if (tag.kind === "minItems") schema.minItems = tag.value;
            else if (tag.kind === "maxItems") schema.maxItems = tag.value;

        return schema;
    };
