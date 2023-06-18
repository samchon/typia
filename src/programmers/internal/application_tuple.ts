import { Metadata } from "../../metadata/Metadata";
import { MetadataTuple } from "../../metadata/MetadataTuple";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_tuple =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (tuple: MetadataTuple) =>
    (
        attribute: IJsonSchema.IAttribute,
    ): IJsonSchema.ITuple | IJsonSchema.IArray => {
        const schema: IJsonSchema.ITuple = {
            type: "array",
            items: tuple.elements.map((meta, i) =>
                application_schema(options)(false)(components)(
                    meta.rest ?? meta,
                )({
                    ...attribute,
                    "x-typia-rest":
                        i === tuple.elements.length - 1 && meta.rest !== null,
                    "x-typia-required": meta.required,
                    "x-typia-optional": meta.optional,
                }),
            ),
            ...attribute,
            minItems: !!tuple.elements.at(-1)?.rest
                ? tuple.elements.length - 1
                : tuple.elements.length,
            maxItems: !!tuple.elements.at(-1)?.rest
                ? undefined
                : tuple.elements.length,
        };
        if (options.purpose === "ajv" && !tuple.elements.at(-1)?.rest)
            return schema;

        const wrapper: IJsonSchema.IArray = {
            ...schema,
            items: application_schema(options)(false)(components)(
                tuple.elements.reduce(
                    (x, y) => Metadata.merge(x.rest ?? x, y.rest ?? y),
                    Metadata.initialize(),
                ),
            )(tuple.recursive ? {} : attribute),
            "x-typia-tuple": schema,
            minItems: schema.minItems,
            maxItems: schema.maxItems,
        };
        return wrapper;
    };
