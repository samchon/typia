import { Metadata } from "../../schemas/metadata/Metadata";

import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

/**
 * @internal
 */
export const application_default_string =
    (meta: Metadata) =>
    (attribute: IJsonSchema.IAttribute) =>
    (schema: IJsonSchema.IString) =>
        application_default(attribute)((str) => {
            const conditions: boolean[] = [];

            // OTHER ATOMIC TYPES
            if (
                meta.atomics.find(
                    (a) => a.type === "number" || a.type === "bigint",
                )
            )
                conditions.push(Number.isNaN(Number(str)));
            if (meta.atomics.find((a) => a.type === "boolean"))
                conditions.push(str !== "true" && str !== "false");
            for (const constant of meta.constants)
                for (const value of constant.values)
                    conditions.push(str !== value.toString());

            // CONSIDER TAGS
            if (schema.minLength !== undefined)
                conditions.push(str.length >= schema.minLength);
            if (schema.maxLength !== undefined)
                conditions.push(str.length <= schema.maxLength);
            if (schema.pattern !== undefined)
                conditions.push(new RegExp(schema.pattern).test(str));
            return conditions.every((c) => c);
        })((str) => str);
