import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../schemas/metadata/MetadataEscaped";

import { IJsonComponents, IJsonSchema } from "../../module";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { application_schema } from "./application_schema";

export const application_escaped =
    (options: JsonApplicationProgrammer.IOptions) =>
    <BlockNever extends boolean>(blockNever: BlockNever) =>
    (components: IJsonComponents) =>
    (resolved: MetadataEscaped) =>
    (attribute: IJsonSchema.IAttribute): IJsonSchema[] => {
        const output = application_schema(options)(blockNever)(components)(
            resolved.returns,
        )(attribute);
        if (output === null) return [];

        if (is_date(new Set())(resolved.original)) {
            const string: IJsonSchema.IString | undefined = is_string(output)
                ? output
                : is_one_of(output)
                ? output.oneOf.find(is_string)
                : undefined;
            if (
                string !== undefined &&
                string.format !== "date" &&
                string.format !== "date-time"
            )
                string.format = "date-time";
        }
        return is_one_of(output) ? output.oneOf : [output];
    };

const is_string = (elem: IJsonSchema): elem is IJsonSchema.IString =>
    (elem as IJsonSchema.IString).type === "string";

const is_one_of = (elem: IJsonSchema): elem is IJsonSchema.IOneOf =>
    Array.isArray((elem as IJsonSchema.IOneOf).oneOf);

const is_date =
    (visited: Set<Metadata>) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;
        visited.add(meta);

        return (
            meta.natives.some((name) => name === "Date") ||
            meta.arrays.some((array) => is_date(visited)(array.type.value)) ||
            meta.tuples.some((tuple) =>
                tuple.type.elements.some(is_date(visited)),
            ) ||
            meta.aliases.some((alias) => is_date(visited)(alias.value))
        );
    };
