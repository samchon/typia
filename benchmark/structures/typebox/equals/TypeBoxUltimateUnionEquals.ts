import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Attribute = {
    description: Type.Optional(Type.String()),
    "x-tson-metaTags": Type.Optional(
        Type.Array(
            Type.Object({
                // @todo - must be specified, but too hard
                kind: Type.String(),
            }),
        ),
    ),
    "x-tson-jsDocTags": Type.Optional(
        Type.Array(
            Type.Object({
                name: Type.String(),
                text: Type.Optional(
                    Type.Array(
                        Type.Object({
                            text: Type.String(),
                            kind: Type.String(),
                        }),
                    ),
                ),
            }),
        ),
    ),
};

const Unknown = Type.Object(
    {
        ...Attribute,
    },
    { additionalProperties: Type.Undefined() },
);
const NullOnly = Type.Object(
    {
        type: Type.Literal("null"),
        ...Attribute,
    },
    { additionalProperties: Type.Undefined() },
);

const Atomic = (literal: string, type: () => any) => {
    return Type.Object(
        {
            type: Type.Literal(literal),
            nullable: Type.Boolean(),
            default: Type.Optional(type()),
            ...Attribute,
        },
        { additionalProperties: Type.Undefined() },
    );
};

const Constant = (literal: string, type: () => any) =>
    Type.Intersect(
        [
            Atomic(literal, type),
            Type.Object({
                enum: Type.Array(type()),
            }),
        ],
        { additionalProperties: Type.Undefined() },
    );

const Array = <T extends TSchema>(schema: T) =>
    Type.Object(
        {
            type: Type.Literal("array"),
            items: schema,
            nullable: Type.Boolean(),
            ...Attribute,
        },
        { additionalProperties: Type.Undefined() },
    );

const Tuple = <T extends TSchema>(schema: T) =>
    Type.Object(
        {
            type: Type.Literal("array"),
            items: Type.Array(schema),
            nullable: Type.Boolean(),
            ...Attribute,
        },
        { additionalProperties: Type.Undefined() },
    );

const Reference = Type.Object(
    {
        $ref: Type.String(),
        ...Attribute,
    },
    { additionalProperties: Type.Undefined() },
);

const RecursiveReference = Type.Object(
    {
        $recursiveRef: Type.String(),
        ...Attribute,
    },
    { additionalProperties: Type.Undefined() },
);

const OneOf = <T extends TSchema>(schema: T) =>
    Type.Object(
        {
            oneOf: Type.Array(schema),
            ...Attribute,
        },
        { additionalProperties: Type.Undefined() },
    );

const ObjectDef = <T extends TSchema>(schema: T) =>
    Type.Object(
        {
            $id: Type.Optional(Type.String()),
            type: Type.Literal("object"),
            nullable: Type.Boolean(),
            properties: Type.Record(Type.String(), schema),
            patternProperties: Type.Optional(
                Type.Record(Type.String(), schema),
            ),
            additionalProperties: Type.Optional(schema),
            required: Type.Optional(Type.Array(Type.String())),
            description: Type.Optional(Type.String()),
            "x-tson_jsDocTags": Type.Optional(Type.Array(Type.Any())),
            $recursiveAnchor: Type.Optional(Type.Boolean()),
        },
        { additionalProperties: Type.Undefined() },
    );

const Components = <T extends TSchema>(schema: T) =>
    Type.Object(
        {
            schemas: Type.Record(Type.String(), ObjectDef(schema)),
        },
        { additionalProperties: Type.Undefined() },
    );

const Application = <T extends TSchema>(schema: T) =>
    Type.Object(
        {
            schemas: Type.Array(schema),
            components: Components(schema),
            purpose: Type.Union([Type.Literal("swagger"), Type.Literal("ajv")]),
            prefix: Type.String(),
        },
        { additionalProperties: Type.Undefined() },
    );

const Schema = Type.Recursive((schema) =>
    Type.Union([
        Atomic("boolean", () => Type.Boolean()),
        Atomic("integer", () => Type.Number()),
        Atomic("bigint", () => Type.Number()),
        Atomic("number", () => Type.Number()),
        Atomic("string", () => Type.String()),
        Constant("boolean", () => Type.Boolean()),
        Constant("integer", () => Type.Number()),
        Constant("bigint", () => Type.Number()),
        Constant("number", () => Type.Number()),
        Constant("string", () => Type.String()),
        Array(schema),
        Tuple(schema),
        Reference,
        RecursiveReference,
        OneOf(schema),
        Unknown,
        NullOnly,
    ]),
);

export const __TypeBoxUltimateUnionEquals = Type.Array(Application(Schema));
export const TypeBoxUltimateUnionEquals = TypeCompiler.Compile(
    __TypeBoxUltimateUnionEquals,
);
