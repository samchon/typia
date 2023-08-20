import ts from "typescript";

import { IMetadataTag } from "../schemas/metadata/IMetadataTag";
import { Metadata } from "../schemas/metadata/Metadata";

export namespace MetadataTagFactory {
    export const generate =
        (metadata: Metadata) =>
        (tagList: ts.JSDocTagInfo[]) =>
        (identifier: () => string): IMetadataTag[] => {
            const output: IMetadataTag[] = [];
            for (const tag of tagList) {
                const elem: IMetadataTag | null = parse(
                    identifier,
                    metadata,
                    tag,
                    output,
                );
                if (elem !== null) output.push(elem);
            }
            return output;
        };

    const parse = (
        identifier: () => string,
        metadata: Metadata,
        tag: ts.JSDocTagInfo,
        output: IMetadataTag[],
    ): IMetadataTag | null => {
        const closure = _PARSER[tag.name];
        if (closure === undefined) return null;

        const text = (tag.text || [])[0]?.text;
        if (text === undefined)
            throw new Error(`${LABEL}: no tag value on ${identifier()}`);

        return closure(identifier, metadata, text, output);
    };

    /**
     * @internal
     */
    export const _PARSER: Record<
        string,
        (
            identifier: () => string,
            metadata: Metadata,
            text: string,
            output: IMetadataTag[],
        ) => IMetadataTag | null
    > = {
        /* -----------------------------------------------------------
            ARRAY
        ----------------------------------------------------------- */
        items: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "items", "array", [
                "minItems",
            ]);
            return {
                kind: "items",
                value: parse_number(identifier, text),
            };
        },
        minItems: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "minItems", "array", [
                "items",
            ]);
            return {
                kind: "minItems",
                value: parse_number(identifier, text),
            };
        },
        maxItems: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "maxItems", "array", [
                "items",
            ]);
            return {
                kind: "maxItems",
                value: parse_number(identifier, text),
            };
        },

        /* -----------------------------------------------------------
            NUMBER
        ----------------------------------------------------------- */
        type: (_identifier, metadata, text, _output) => {
            if (text.startsWith("{") && text.endsWith("}"))
                text = text.substring(1, text.length - 1);
            return has_atomic("number")(new Set())(metadata) &&
                (text === "int" ||
                    text === "uint" ||
                    text === "int32" ||
                    text === "uint32" ||
                    text === "int64" ||
                    text === "uint64" ||
                    text === "float" ||
                    text === "double")
                ? { kind: "type", value: text }
                : null;
        },
        minimum: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "minimum", "number", [
                "exclusiveMinimum",
            ]);
            return {
                kind: "minimum",
                value: parse_number(identifier, text),
            };
        },
        maximum: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "maximum", "number", [
                "exclusiveMaximum",
            ]);
            return {
                kind: "maximum",
                value: parse_number(identifier, text),
            };
        },
        exclusiveMinimum: (identifier, metadata, text, output) => {
            validate(
                identifier,
                metadata,
                output,
                "exclusiveMinimum",
                "number",
                ["minimum"],
            );
            return {
                kind: "exclusiveMinimum",
                value: parse_number(identifier, text),
            };
        },
        exclusiveMaximum: (identifier, metadata, text, output) => {
            validate(
                identifier,
                metadata,
                output,
                "exclusiveMaximum",
                "number",
                ["maximum"],
            );
            return {
                kind: "exclusiveMaximum",
                value: parse_number(identifier, text),
            };
        },
        multipleOf: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "multipleOf", "number", [
                "step",
            ]);
            return {
                kind: "multipleOf",
                value: parse_number(identifier, text),
            };
        },
        step: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "step", "number", [
                "multipleOf",
            ]);

            const minimum: boolean = output.some(
                (tag) =>
                    tag.kind === "minimum" || tag.kind === "exclusiveMinimum",
            );
            if (minimum === undefined)
                throw new Error(
                    `${LABEL}: step requires minimum or exclusiveMinimum tag on "${identifier()}".`,
                );

            return {
                kind: "step",
                value: parse_number(identifier, text),
            };
        },

        /* -----------------------------------------------------------
            STRING
        ----------------------------------------------------------- */
        // Ignore arbitrary @format values in the internal metadata,
        // these are currently only supported on the typia.application() API.
        format: (identifier, metadata, str, output) => {
            const value: IMetadataTag.IFormat["value"] | undefined =
                FORMATS.get(str);
            validate(
                identifier,
                metadata,
                output,
                "format",
                value === "date" || value === "datetime" ? "Date" : "string",
                ["pattern"],
            );
            if (value === undefined) return null;
            return {
                kind: "format",
                value,
            };
        },
        pattern: (identifier, metadata, value, output) => {
            validate(identifier, metadata, output, "pattern", "string", [
                "format",
            ]);
            return {
                kind: "pattern",
                value,
            };
        },
        length: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "length", "string", [
                "minLength",
                "maxLength",
            ]);
            return {
                kind: "length",
                value: parse_number(identifier, text),
            };
        },
        minLength: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "minLength", "string", [
                "length",
            ]);
            return {
                kind: "minLength",
                value: parse_number(identifier, text),
            };
        },
        maxLength: (identifier, metadata, text, output) => {
            validate(identifier, metadata, output, "maxLength", "string", [
                "length",
            ]);
            return {
                kind: "maxLength",
                value: parse_number(identifier, text),
            };
        },
    };
}

const parse_number = (identifier: () => string, str: string): number => {
    const value: number = Number(str);
    if (isNaN(value) === true)
        throw new Error(`${LABEL}: invalid number on "${identifier()}".`);
    return value;
};

const LABEL = "Error on typia.MetadataTagFactory.generate()";
const FORMATS: Map<string, IMetadataTag.IFormat["value"]> = new Map([
    ["uuid", "uuid"],
    ["email", "email"],
    ["url", "url"],
    ["ipv4", "ipv4"],
    ["ipv6", "ipv6"],
    ["date", "date"],
    ["datetime", "datetime"],
    ["date-time", "datetime"],
    ["dateTime", "datetime"],
]);

const WRONG_TYPE = (
    tag: string,
    type: "string" | "number" | "array",
    identifier: () => string,
) => `${LABEL}: ${tag} requires ${type} type, but no "${identifier()}".`;

const validate = (
    identifier: () => string,
    metadata: Metadata,
    output: IMetadataTag[],
    kind: IMetadataTag["kind"],
    type: "array" | "string" | "number" | "Date",
    neighbors: IMetadataTag["kind"][],
): void => {
    // TYPE CHECKING
    if (type === "array") {
        if (has_array(new Set())(metadata) === false)
            throw new Error(WRONG_TYPE(kind, "array", identifier));
    } else if (type === "Date") {
        if (
            has_native("Date")(new Set())(metadata) === false &&
            has_atomic("string")(new Set())(metadata) === false
        )
            throw new Error(WRONG_TYPE(kind, "string", identifier));
    } else if (has_atomic(type)(new Set())(metadata) === false)
        throw new Error(WRONG_TYPE(kind, type, identifier));

    // DUPLICATED TAG
    if (output.some((tag) => tag.kind === kind))
        throw new Error(
            `${LABEL}: duplicated ${kind} tags on "${identifier()}".`,
        );

    // NEIGHBOR TAG
    for (const name of neighbors)
        if (output.some((tag) => tag.kind === name))
            throw new Error(
                `${LABEL}: ${kind} and ${name} tags on "${identifier()}".`,
            );
};

// @todo: must block repeated array and tuple type
const has_atomic =
    (type: "string" | "number") =>
    (visited: Set<Metadata>) =>
    (metadata: Metadata): boolean => {
        if (visited.has(metadata)) return false;
        visited.add(metadata);
        return (
            metadata.atomics.find(
                type === "number"
                    ? (atom: string) => atom === type || atom === "bigint"
                    : (atom: string) => atom === type,
            ) !== undefined ||
            metadata.arrays.some((array) =>
                has_atomic(type)(visited)(array.value),
            ) ||
            metadata.tuples.some((tuple) =>
                tuple.elements.some(has_atomic(type)(visited)),
            ) ||
            metadata.maps.some((map) => has_atomic(type)(visited)(map.value)) ||
            metadata.aliases.some((alias) =>
                has_atomic(type)(visited)(alias.value),
            ) ||
            (metadata.resolved !== null &&
                has_atomic(type)(visited)(metadata.resolved.returns))
        );
    };

const has_native =
    (type: string) =>
    (visited: Set<Metadata>) =>
    (metadata: Metadata): boolean => {
        if (visited.has(metadata)) return false;
        visited.add(metadata);
        return (
            metadata.natives.find((native) => native === type) !== undefined ||
            metadata.arrays.some((child) =>
                has_native(type)(visited)(child.value),
            ) ||
            metadata.tuples.some((tuple) =>
                tuple.elements.some(has_native(type)(visited)),
            ) ||
            metadata.maps.some((map) => has_native(type)(visited)(map.value)) ||
            metadata.aliases.some((alias) =>
                has_native(type)(visited)(alias.value),
            ) ||
            (metadata.resolved !== null &&
                has_native(type)(visited)(metadata.resolved.returns))
        );
    };

const has_array =
    (visited: Set<Metadata>) =>
    (metadata: Metadata): boolean => {
        if (visited.has(metadata)) return false;
        visited.add(metadata);
        return (
            metadata.arrays.length !== 0 ||
            metadata.tuples.some((tuple) =>
                tuple.elements.some(has_array(visited)),
            ) ||
            metadata.maps.some((map) => has_array(visited)(map.value)) ||
            metadata.aliases.some((alias) => has_array(visited)(alias.value)) ||
            (metadata.resolved !== null &&
                has_array(visited)(metadata.resolved.returns))
        );
    };
