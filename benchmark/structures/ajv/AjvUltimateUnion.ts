import { TSchema, Type } from "@sinclair/typebox";
import Ajv from "ajv";

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

const Unknown = Type.Object({
    ...Attribute,
});
const NullOnly = Type.Object({
    type: Type.Literal("null"),
    ...Attribute,
});

const Atomic = (literal: string, type: () => any) => {
    return Type.Object({
        type: Type.Literal(literal),
        nullable: Type.Boolean(),
        default: Type.Optional(type()),
        ...Attribute,
    });
};

const Constant = (literal: string, type: () => any) =>
    Type.Intersect([
        Atomic(literal, type),
        Type.Object({
            enum: Type.Array(type()),
        }),
    ]);

const Array = <T extends TSchema>(schema: T) =>
    Type.Object({
        type: Type.Literal("array"),
        items: schema,
        nullable: Type.Boolean(),
        ...Attribute,
    });

const Tuple = <T extends TSchema>(schema: T) =>
    Type.Object({
        type: Type.Literal("array"),
        items: Type.Array(schema),
        nullable: Type.Boolean(),
        ...Attribute,
    });

const Reference = Type.Object({
    $ref: Type.String(),
    ...Attribute,
});

const RecursiveReference = Type.Object({
    $recursiveRef: Type.String(),
    ...Attribute,
});

const OneOf = <T extends TSchema>(schema: T) =>
    Type.Object({
        oneOf: Type.Array(schema),
        ...Attribute,
    });

const ObjectDef = <T extends TSchema>(schema: T) =>
    Type.Object({
        $id: Type.Optional(Type.String()),
        type: Type.Literal("object"),
        nullable: Type.Boolean(),
        properties: Type.Record(Type.String(), schema),
        patternProperties: Type.Optional(Type.Record(Type.String(), schema)),
        additionalProperties: Type.Optional(schema),
        required: Type.Optional(Type.Array(Type.String())),
        description: Type.Optional(Type.String()),
        "x-tson_jsDocTags": Type.Optional(Type.Array(Type.Any())),
        $recursiveAnchor: Type.Optional(Type.Boolean()),
    });

const Components = <T extends TSchema>(schema: T) =>
    Type.Object({
        schemas: Type.Record(Type.String(), ObjectDef(schema)),
    });

const Application = <T extends TSchema>(schema: T) =>
    Type.Object({
        schemas: Type.Array(schema),
        components: Components(schema),
        purpose: Type.Union([Type.Literal("swagger"), Type.Literal("ajv")]),
        prefix: Type.String(),
    });

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

export const __AjvUltimateUnion = Type.Array(Application(Schema));

const ajv = new Ajv();
const validate = ajv.compile(__AjvUltimateUnion);
export const AjvUltimateUnion = {
    Check: (input: unknown) => validate(input) as boolean,
};
