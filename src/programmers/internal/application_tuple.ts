import { Metadata } from "../../metadata/Metadata";
import { MetadataTuple } from "../../metadata/MetadataTuple";
import { IJsonComponents } from "../../schemas/IJsonComponents";
import { IJsonSchema } from "../../schemas/IJsonSchema";

import { ApplicationProgrammer } from "../ApplicationProgrammer";
import { JSON_COMPONENTS_PREFIX } from "./JSON_SCHEMA_PREFIX";
import { application_schema } from "./application_schema";

/**
 * @internal
 */
export const application_tuple =
    (options: ApplicationProgrammer.IOptions) =>
    (components: IJsonComponents) =>
    (tuple: MetadataTuple) =>
    (attribute: IJsonSchema.IAttribute) =>
    (
        nullable: boolean,
    ):
        | IJsonSchema.ITuple
        | IJsonSchema.IArray
        | IJsonSchema.IReference
        | IJsonSchema.IRecursiveReference => {
        const generator = () => {
            const schema: IJsonSchema.ITuple = {
                ...attribute,
                type: "array",
                items: tuple.elements.map((elem) =>
                    application_schema(options)(false)(components)(
                        elem.rest ?? elem,
                    )(tuple.recursive ? {} : attribute),
                ),
                "x-typia-rest": !!tuple.elements.at(-1)?.rest,
            };
            const wrapper: IJsonSchema.ITuple | IJsonSchema.IArray =
                options.purpose === "ajv" && !tuple.elements.at(-1)?.rest
                    ? schema
                    : {
                          ...schema,
                          items: application_schema(options)(false)(components)(
                              tuple.elements.reduce(
                                  (x, y) =>
                                      Metadata.merge(x.rest ?? x, y.rest ?? y),
                                  Metadata.initialize(),
                              ),
                          )(tuple.recursive ? {} : attribute),
                          "x-typia-tuple": schema,
                      };
            return wrapper;
        };
        if (tuple.recursive === false) return generator();

        // KEY
        const key: string =
            options.purpose === "ajv"
                ? tuple.name
                : `${tuple.name}${nullable ? ".Nullable" : ""}`;
        const $id: string = `${JSON_COMPONENTS_PREFIX}/tuples/${key}`;

        // REFERENCE
        if (components.tuples?.[key] === undefined) {
            components.tuples ??= {};
            components.tuples[key] = {} as any;

            const repeated: IJsonComponents.IArray | IJsonComponents.ITuple = {
                ...generator(),
                $id: options.purpose === "ajv" ? $id : undefined,
                $recursiveAnchor: options.purpose === "ajv" || undefined,
            };
            components.tuples ??= {};
            components.tuples[key] = repeated;
        }
        return options.purpose === "ajv" && tuple.recursive
            ? { ...attribute, $recursiveRef: $id }
            : { ...attribute, $ref: $id };
    };
