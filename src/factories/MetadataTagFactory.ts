import ts from "typescript";

import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";

export namespace MetadataTagFactory {
    export function generate(
        identifier: () => string,
        metadata: Metadata,
        tagList: ts.JSDocTagInfo[],
    ): IMetadataTag[] {
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
    }

    function parse(
        identifier: () => string,
        metadata: Metadata,
        tag: ts.JSDocTagInfo,
        output: IMetadataTag[],
    ): IMetadataTag | null {
        const closure = PARSER[tag.name];
        if (closure === undefined) return null;

        const text = (tag.text || [])[0]?.text;
        if (text === undefined)
            throw new Error(`${LABEL}: no tag value on ${identifier()}`);

        return closure(identifier, metadata, text, output);
    }
}

const PARSER: Record<
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
            "maxItems",
        ]);
        return parse_range("items", identifier, text, true);
    },
    minItems: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "minItems", "array", ["items"]);
        return {
            kind: "minItems",
            value: parse_number(identifier, text),
        };
    },
    maxItems: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "maxItems", "array", ["items"]);
        return {
            kind: "maxItems",
            value: parse_number(identifier, text),
        };
    },

    /* -----------------------------------------------------------
        NUMBER
    ----------------------------------------------------------- */
    type: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "type", "number", []);
        if (text !== "int" && text !== "uint")
            throw new Error(`${LABEL}: invalid type tag on "${identifier()}".`);
        return { kind: "type", value: text };
    },
    range: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "range", "number", [
            "exclusiveMinimum",
            "minimum",
            "maximum",
            "exclusiveMaximum",
        ]);
        return parse_range("range", identifier, text, false);
    },
    minimum: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "minimum", "number", [
            "range",
            "exclusiveMaximum",
            "exclusiveMinimum",
        ]);
        return {
            kind: "minimum",
            value: parse_number(identifier, text),
        };
    },
    maximum: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "maximum", "number", [
            "range",
            "exclusiveMinimum",
            "exclusiveMaximum",
        ]);
        return {
            kind: "maximum",
            value: parse_number(identifier, text),
        };
    },
    exclusiveMinimum: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "exclusiveMinimum", "number", [
            "range",
            "minimum",
            "maximum",
        ]);
        return {
            kind: "exclusiveMinimum",
            value: parse_number(identifier, text),
        };
    },
    exclusiveMaximum: (identifier, metadata, text, output) => {
        validate(identifier, metadata, output, "exclusiveMaximum", "number", [
            "range",
            "minimum",
            "maximum",
        ]);
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
                tag.kind === "minimum" ||
                tag.kind === "exclusiveMinimum" ||
                (tag.kind === "range" && tag.minimum !== undefined),
        );
        if (minimum === undefined)
            throw new Error(
                `${LABEL}: step requires minimum tag on "${identifier()}".`,
            );

        return {
            kind: "step",
            value: parse_number(identifier, text),
        };
    },

    /* -----------------------------------------------------------
        STRING
    ----------------------------------------------------------- */
    format: (identifier, metadata, value, output) => {
        validate(identifier, metadata, output, "format", "string", ["pattern"]);

        // Ignore arbitrary @format values in the internal metadata,
        // these are currently only supported on the typia.application() API.
        if (FORMATS.has(value) === false) return null;

        return {
            kind: "format",
            value: value as "uuid",
        };
    },
    pattern: (identifier, metadata, value, output) => {
        validate(identifier, metadata, output, "pattern", "string", ["format"]);
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
        return parse_range("length", identifier, text, true);
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

function parse_range<Kind extends string>(
    kind: Kind,
    identifier: () => string,
    text: string,
    allowScalar: boolean,
): Omit<IMetadataTag.IRange, "kind"> & { kind: Kind } {
    if (allowScalar === true && Number.isNaN(Number(text)) === false) {
        const value: number = Number(text);
        if (Math.floor(value) !== value)
            throw new Error(`${LABEL}: invalid length on "${identifier()}".`);
        return {
            kind,
            minimum: {
                include: true,
                value,
            },
            maximum: {
                include: true,
                value,
            },
        };
    } else if (text.indexOf(",") === -1)
        if (LEFT_PARENTHESIS.some((str) => text.indexOf(str) !== -1))
            return {
                kind,
                minimum: parse_side("left")(kind)(identifier)(text),
            };
        else if (RIGHT_PARENTHESIS.some((str) => text.indexOf(str) !== -1))
            return {
                kind,
                maximum: parse_side("right")(kind)(identifier)(text),
            };
        else
            throw new Error(
                `${LABEL}: invalid ${kind} tag on "${identifier()}".`,
            );

    const [left, right] = text.split(",") as [string, string];
    return {
        kind,
        minimum: parse_side("left")(kind)(identifier)(left),
        maximum: parse_side("right")(kind)(identifier)(right),
    };
}

const parse_side = (side: "left" | "right") => {
    const symbol = side === "left" ? LEFT_PARENTHESIS : RIGHT_PARENTHESIS;
    const substring: (str: string, index: number) => string =
        side === "left"
            ? (str, index) => str.substring(index + 1)
            : (str, index) => str.substring(0, index);
    return (tag: string) => (identifier: () => string) => (text: string) => {
        const [index, include] =
            text.indexOf(symbol[0]) !== -1
                ? [text.indexOf(symbol[0]), true]
                : [text.indexOf(symbol[1]), false];
        if (index === -1)
            throw new Error(
                `${LABEL}: invalid ${tag} tag on "${identifier()}".`,
            );
        return {
            include,
            value: parse_number(identifier, substring(text, index)),
        };
    };
};

function parse_number(identifier: () => string, str: string): number {
    const value: number = Number(str);
    if (isNaN(value) === true)
        throw new Error(`${LABEL}: invalid number on "${identifier()}".`);
    return value;
}

const LABEL = "Error on typia.MetadataTagFactory.generate()";
const LEFT_PARENTHESIS = ["[", "("] as const;
const RIGHT_PARENTHESIS = ["]", ")"] as const;
const FORMATS = new Set(["uuid", "email", "url", "mobile", "ipv4", "ipv6"]);

const WRONG_TYPE = (
    tag: string,
    type: "string" | "number" | "array",
    identifier: () => string,
) => `${LABEL}: ${tag} requires ${type} type, but no "${identifier()}".`;

function validate(
    identifier: () => string,
    metadata: Metadata,
    output: IMetadataTag[],
    kind: IMetadataTag["kind"],
    type: "array" | "string" | "number",
    neighbors: IMetadataTag["kind"][],
): void {
    // TYPE CHECKING
    if (type === "array") {
        if (has_array(metadata) === false)
            throw new Error(WRONG_TYPE(kind, "array", identifier));
    } else if (has_atomic(metadata, type) === false)
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
}

function has_atomic(metadata: Metadata, type: "string" | "number"): boolean {
    return (
        metadata.atomics.find((atom) => atom === type) !== undefined ||
        metadata.arrays.some((child) => has_atomic(child, type)) ||
        metadata.tuples.some((tuple) =>
            tuple.some((child) => has_atomic(child, type)),
        )
    );
}

function has_array(metadata: Metadata): boolean {
    return (
        metadata.arrays.length !== 0 ||
        metadata.tuples.some((tuple) => tuple.some((child) => has_array(child)))
    );
}
