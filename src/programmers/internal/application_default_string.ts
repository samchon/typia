import { Metadata } from "../../metadata/Metadata";

import { IJsonSchema } from "../../module";
import { application_default } from "./application_default";

export const application_default_string =
    (meta: Metadata, attribute: IJsonSchema.IAttribute) =>
    (schema: IJsonSchema.IString) =>
    (special?: (str: string) => boolean) =>
        application_default(attribute)((str) => {
            const conditions: boolean[] = [];
            if (special) conditions.push(special(str));

            // OTHER ATOMIC TYPES
            if (meta.atomics.find((t) => t === "number" || t === "bigint"))
                conditions.push(Number.isNaN(Number(str)));
            if (meta.atomics.find((t) => t === "boolean"))
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
                conditions.push(RegExp(schema.pattern).test(str));
            return conditions.every((c) => c);
        })((str) => str);
