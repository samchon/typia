import ts from "typescript";
import { IMetadataTag } from "../metadata/IMetadataTag";
import { Metadata } from "../metadata/Metadata";

export namespace MetadataTagFactory {
    export function generate(
        identifier: () => string,
        metadata: Metadata,
        tagList: ts.JSDocTagInfo[],
    ): IMetadataTag[] {
        return tagList
            .map((tag) => parse(identifier, metadata, tag))
            .filter((tag) => tag !== null) as IMetadataTag[];
    }

    function parse(
        identifier: () => string,
        metadata: Metadata,
        tag: ts.JSDocTagInfo,
    ): IMetadataTag | null {
        const closure = PARSER[tag.name];
        if (closure === undefined) return null;

        const text = (tag.text || [])[0]?.text;
        if (text === undefined)
            throw new Error(`${LABEL}: no tag value on ${identifier()}`);

        return closure(identifier, metadata, text);
    }
}

const PARSER: Record<
    string,
    (identifier: () => string, metadata: Metadata, text: string) => IMetadataTag
> = {
    format: (identifier, _metadata, value) => {
        if (FORMATS.has(value) === false)
            throw new Error(
                `${LABEL}: invalid format category on ${identifier()}.`,
            );
        return {
            kind: "format",
            value: value as "uuid",
        };
    },
    pattern: (identifier, metadata, value) => {
        if (metadata.atomics.find((atom) => atom === "string") === undefined)
            throw new Error(`${LABEL}: no string type on ${identifier()}.`);
        return {
            kind: "pattern",
            value,
        };
    },
    range: (identifier, metadata, text) => {
        if (metadata.atomics.find((atom) => atom === "number") === undefined)
            throw new Error(`${LABEL}: no number type on ${identifier()}.`);
        return parse_range("range", identifier, text);
    },
    length: (identifier, metadata, text) => {
        if (metadata.atomics.find((atom) => atom === "string") === undefined)
            throw new Error(`${LABEL}: no string type on ${identifier()}.`);
        else if (Number.isNaN(Number(text)) === false) {
            const value: number = Number(text);
            if (Math.floor(value) !== value)
                throw new Error(`${LABEL}: invalid length on ${identifier()}.`);
            return {
                kind: "length",
                minimum: {
                    include: true,
                    value,
                },
                maximum: {
                    include: true,
                    value,
                },
            };
        }
        return parse_range("length", identifier, text);
    },
};

function parse_range<Kind extends string>(
    kind: Kind,
    identifier: () => string,
    text: string,
): Omit<IMetadataTag.IRange, "kind"> & { kind: Kind } {
    if (text.indexOf(",") === -1)
        if (
            LEFT_PARENTHESIS.some((str) => text.indexOf(str) !== -1) !==
            undefined
        )
            return {
                kind,
                minimum: parse_side("left")(kind)(identifier)(text),
            };
        else if (
            RIGHT_PARENTHESIS.some((str) => text.indexOf(str) !== -1) !==
            undefined
        )
            return {
                kind,
                maximum: parse_side("right")(kind)(identifier)(text),
            };
        else throw new Error(`${LABEL}: invalid ${kind} on ${identifier()}.`);

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
            throw new Error(`${LABEL}: invalid ${tag} on ${identifier()}.`);
        return {
            include,
            value: parse_number(identifier, substring(text, index)),
        };
    };
};

function parse_number(identifier: () => string, str: string): number {
    const value: number = Number(str);
    if (isNaN(value) === true)
        throw new Error(`${LABEL}: invalid number on ${identifier()}.`);
    return value;
}

const LABEL = "Error on TSON.MetadataTagFactory.generate()";
const LEFT_PARENTHESIS = ["[", "("] as const;
const RIGHT_PARENTHESIS = ["]", ")"] as const;
const FORMATS = new Set(["uuid", "email", "url", "ipv4", "ipv6"]);
