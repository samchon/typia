import { IJsonComponents } from "../../schemas/json/IJsonComponents";
import { IJsonSchema } from "../../schemas/json/IJsonSchema";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_tuple =
    (options: JsonApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (tuple: MetadataTuple) =>
    (
        attribute: IJsonSchema.IAttribute,
    ): IJsonSchema.ITuple | IJsonSchema.IArray => {
        const schema: IJsonSchema.ITuple = {
            type: "array",
            items: tuple.type.elements.map((meta, i) =>
                application_schema(options)(false)(components)(
                    meta.rest ?? meta,
                )({
                    ...attribute,
                    "x-typia-rest":
                        i === tuple.type.elements.length - 1 &&
                        meta.rest !== null,
                    "x-typia-required": meta.required,
                    "x-typia-optional": meta.optional,
                }),
            ),
            ...attribute,
            minItems: !!tuple.type.elements.at(-1)?.rest
                ? tuple.type.elements.length - 1
                : tuple.type.elements.filter((x) => !x.optional).length,
            maxItems: !!tuple.type.elements.at(-1)?.rest
                ? undefined
                : tuple.type.elements.length,
        };
        if (options.purpose === "ajv")
            if (tuple.type.elements.length === 0) return schema;
            else if (!tuple.type.elements.at(-1)?.rest) return schema;

        const wrapper: IJsonSchema.IArray = {
            ...schema,
            items: application_schema(options)(false)(components)(
                tuple.type.elements.reduce(
                    (x, y) => Metadata.merge(x.rest ?? x, y.rest ?? y),
                    Metadata.initialize(),
                ),
            )(tuple.type.recursive ? {} : attribute),
            "x-typia-tuple": schema,
            minItems: schema.minItems,
            maxItems: schema.maxItems,
        };
        return wrapper;
    };
