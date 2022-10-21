import { TSchema, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Unknown = Type.Object({});

const Atomic = Type.Object({
    type: Type.Union([
        Type.Literal("boolean"),
        Type.Literal("number"),
        Type.Literal("bigint"),
        Type.Literal("string"),
    ]),
    nullable: Type.Boolean(),
    description: Type.Optional(Type.String()),
    default: Type.Optional(
        Type.Union([
            Type.String(),
            Type.Number(),
            Type.Boolean(),
            // z.bigint(),  // bigint not supported
        ]),
    ),
});

const Constant = Type.Integer([
    Atomic,
    Type.Object({
        constant: Type.Array(
            Type.Union([
                Type.Boolean(),
                Type.Number(),
                // z.bigint(), // bigint not supported
                Type.String(),
            ]),
        ),
    }),
]);

const Array = <T extends TSchema>(schema: T) =>
    Type.Object({
        type: Type.Literal("array"),
        items: schema,
        nullable: Type.Boolean(),
        description: Type.Optional(Type.String()),
    });

const Tuple = <T extends TSchema>(schema: T) =>
    Type.Object({
        type: Type.Literal("array"),
        items: Type.Array(schema),
        nullable: Type.Boolean(),
        description: Type.Optional(Type.String()),
    });

const Reference = Type.Object({
    $ref: Type.String(),
    description: Type.Optional(Type.String()),
});

const RecursiveReference = Type.Object({
    $recursiveRef: Type.String(),
    description: Type.Optional(Type.String()),
});

const OneOf = <T extends TSchema>(schema: T) =>
    Type.Object({
        oneOf: Type.Array(schema),
        description: Type.Optional(Type.String()),
    });

const ObjectDef = <T extends TSchema>(schema: T) =>
    Type.Object({
        $id: Type.String(),
        type: Type.Literal("object"),
        nullable: Type.Boolean(),
        properties: Type.Record(Type.String(), Schema),
        patternProperties: Type.Optional(Type.Record(Type.String(), schema)),
        required: Type.Optional(Type.Array(Type.String())),
        description: Type.Optional(Type.String()),
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
        Atomic,
        Constant,
        Array(schema),
        Tuple(schema),
        Reference,
        RecursiveReference,
        OneOf(schema),
        Unknown,
    ]),
);

export const __TypeBoxUltimateUnion = Type.Array(Application(Schema));
export const TypeBoxUltimateUnion = TypeCompiler.Compile(
    __TypeBoxUltimateUnion,
);
