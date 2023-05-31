import { MetadataArray } from "../../metadata/MetadataArray";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_array =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (array: MetadataArray) =>
    (attribute: IJsonSchema.IAttribute) =>
    (
        nullable: boolean,
    ):
        | IJsonSchema.IArray
        | IJsonSchema.IReference
        | IJsonSchema.IRecursiveReference => {
        // SCHEMA
        const generator = () => {
            const schema: IJsonSchema.IArray = {
                ...attribute,
                type: "array",
                items: application_schema(options)(false)(components)(
                    array.value,
                )(array.recursive ? {} : attribute),
            };
            if (array.recursive === false) {
                for (const tag of attribute["x-typia-metaTags"] ?? [])
                    if (tag.kind === "minItems") schema.minItems = tag.value;
                    else if (tag.kind === "maxItems")
                        schema.maxItems = tag.value;
            }
            return schema;
        };
        if (array.recursive === false) return generator();

        // KEY
        const key: string =
            options.purpose === "ajv"
                ? array.name
                : `${array.name}${nullable ? ".Nullable" : ""}`;
        const $id: string = `${JSON_COMPONENTS_PREFIX}/arrays/${key}`;

        // REFERENCE
        if (components.arrays?.[key] === undefined) {
            components.arrays ??= {};
            components.arrays[key] = {} as any;

            const repeated: IJsonComponents.IArray = {
                ...generator(),
                $id: options.purpose === "ajv" ? $id : undefined,
                $recursiveAnchor: options.purpose === "ajv" || undefined,
            };
            components.arrays[key] = repeated;
        }
        return options.purpose === "ajv" && array.recursive
            ? { ...attribute, $recursiveRef: $id }
            : { ...attribute, $ref: $id };
    };
