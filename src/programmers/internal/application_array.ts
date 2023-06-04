import { MetadataArray } from "../../metadata/MetadataArray";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_array =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (array: MetadataArray) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema.IArray => {
        // SCHEMA
        const schema: IJsonSchema.IArray = {
            ...attribute,
            type: "array",
            items: application_schema(options)(false)(components)(array.value)(
                attribute,
            ),
        };

        // RANGE
        for (const tag of attribute["x-typia-metaTags"] ?? [])
            if (tag.kind === "minItems") schema.minItems = tag.value;
            else if (tag.kind === "maxItems") schema.maxItems = tag.value;
        return schema;
    };
