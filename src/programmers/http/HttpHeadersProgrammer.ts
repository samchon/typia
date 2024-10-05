import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { Escaper } from "../../utils/Escaper";
import { MapUtil } from "../../utils/MapUtil";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpHeadersProgrammer {
  export const INPUT_TYPE = "Record<string, string | string[] | undefined>";

  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // ANALYZE TYPE
    const collection: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        escape: false,
        constant: true,
        absorb: true,
        validate,
      },
      collection,
      type: props.type,
    });
    if (result.success === false)
      throw TransformerError.from({
        code: `typia.http.${props.functor.method}`,
        errors: result.errors,
      });

    // DO TRANSFORM
    const object: MetadataObject = result.data.objects[0]!;
    const statements: ts.Statement[] = decode_object({
      functor: props.functor,
      object,
    });
    return {
      functions: {},
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode(INPUT_TYPE),
          ),
        ],
        ts.factory.createImportTypeNode(
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral("typia"),
          ),
          undefined,
          ts.factory.createIdentifier("Resolved"),
          [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
          false,
        ),
        undefined,
        ts.factory.createBlock(statements, true),
      ),
    };
  };

  export const write = (props: IProgrammerProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  export const validate = (
    meta: Metadata,
    explore: MetadataFactory.IExplore,
  ): string[] => {
    const errors: string[] = [];
    const insert = (msg: string) => errors.push(msg);

    if (explore.top === true) {
      // TOP MUST BE ONLY OBJECT
      if (meta.objects.length !== 1 || meta.bucket() !== 1)
        insert("only one object type is allowed.");
      if (meta.nullable === true) insert("headers cannot be null.");
      if (meta.isRequired() === false) insert("headers cannot be null.");
    } else if (
      explore.nested !== null &&
      explore.nested instanceof MetadataArrayType
    ) {
      //----
      // ARRAY
      //----
      const atomics = HttpMetadataUtil.atomics(meta);
      const expected: number =
        meta.atomics.length +
        meta.templates.length +
        meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0);
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected)
        insert("only atomic or constant types are allowed in array.");
      if (meta.nullable === true)
        insert("nullable type is not allowed in array.");
      if (meta.isRequired() === false)
        insert("optional type is not allowed in array.");
    } else if (explore.object && explore.property !== null) {
      //----
      // COMMON
      //----
      // PROPERTY MUST BE SOLE
      if (typeof explore.property === "object")
        insert("dynamic property is not allowed.");
      // DO NOT ALLOW TUPLE TYPE
      if (meta.tuples.length) insert("tuple type is not allowed.");
      // DO NOT ALLOW UNION TYPE
      if (HttpMetadataUtil.isUnion(meta)) insert("union type is not allowed.");
      // DO NOT ALLOW NESTED OBJECT
      if (
        meta.objects.length ||
        meta.sets.length ||
        meta.maps.length ||
        meta.natives.length
      )
        insert("nested object type is not allowed.");
      // DO NOT ALLOW NULLABLE
      if (meta.nullable === true) insert("nullable type is not allowed.");

      //----
      // SPECIAL KEY NAMES
      //----
      const isArray: boolean =
        meta.arrays.length >= 1 || meta.tuples.length >= 1;
      // SET-COOKIE MUST BE ARRAY
      if (
        typeof explore.property === "string" &&
        explore.property.toLowerCase() === "set-cookie" &&
        isArray === false
      )
        insert(`${explore.property} property must be array.`);
      // MUST BE SINGULAR CASE
      if (
        typeof explore.property === "string" &&
        SINGULAR.has(explore.property.toLowerCase()) &&
        isArray === true
      )
        insert("property cannot be array.");
    } else if (explore.object && explore.property === null) {
      const counter: Map<string, Set<string>> = new Map();
      for (const prop of explore.object.properties) {
        const key: string | null = prop.key.getSoleLiteral();
        if (key === null) continue;

        MapUtil.take(counter, key.toLowerCase(), () => new Set()).add(key);
      }
      for (const [key, set] of counter)
        if (set.size > 1)
          insert(
            `duplicated keys when converting to lowercase letters: [${[
              ...set,
            ].join(", ")}] -> ${key}`,
          );
    }
    return errors;
  };

  const decode_object = (props: {
    functor: FunctionProgrammer;
    object: MetadataObject;
  }): ts.Statement[] => {
    const output: ts.Identifier = ts.factory.createIdentifier("output");
    const optionals: string[] = [];
    return [
      StatementFactory.constant({
        name: "output",
        value: ts.factory.createObjectLiteralExpression(
          props.object.properties.map((p) => {
            if (
              !p.value.isRequired() &&
              p.value.arrays.length + p.value.tuples.length > 0
            )
              optionals.push(p.key.constants[0]!.values[0]!.value as string);
            return decode_regular_property({
              functor: props.functor,
              property: p,
            });
          }),
          true,
        ),
      }),
      ...optionals.map((key) => {
        const access = IdentifierFactory.access(output, key);
        return ts.factory.createIfStatement(
          ts.factory.createStrictEquality(
            ExpressionFactory.number(0),
            IdentifierFactory.access(access, "length"),
          ),
          ts.factory.createExpressionStatement(
            ts.factory.createDeleteExpression(access),
          ),
        );
      }),
      ts.factory.createReturnStatement(
        ts.factory.createAsExpression(output, TypeFactory.keyword("any")),
      ),
    ];
  };

  const decode_regular_property = (props: {
    functor: FunctionProgrammer;
    property: MetadataProperty;
  }): ts.PropertyAssignment => {
    const key: string = props.property.key.constants[0]!.values[0]!
      .value as string;
    const value: Metadata = props.property.value;

    const [type, isArray]: [Atomic.Literal, boolean] = value.atomics.length
      ? [value.atomics[0]!.type, false]
      : value.constants.length
        ? [value.constants[0]!.type, false]
        : value.templates.length
          ? ["string", false]
          : (() => {
              const meta: Metadata =
                value.arrays[0]?.type.value ??
                value.tuples[0]!.type.elements[0]!;
              return meta.atomics.length
                ? [meta.atomics[0]!.type, true]
                : meta.templates.length
                  ? ["string", true]
                  : [meta.constants[0]!.type, true];
            })();
    const input = IdentifierFactory.access(
      ts.factory.createIdentifier("input"),
      key.toLowerCase(),
    );

    return ts.factory.createPropertyAssignment(
      Escaper.variable(key) ? key : ts.factory.createStringLiteral(key),
      isArray
        ? key === "set-cookie"
          ? input
          : decode_array({
              functor: props.functor,
              type,
              key,
              value,
              input,
            })
        : decode_value({
            functor: props.functor,
            type,
            input,
          }),
    );
  };

  const decode_value = (props: {
    functor: FunctionProgrammer;
    type: Atomic.Literal;
    input: ts.Expression;
  }) =>
    props.type === "string"
      ? props.input
      : ts.factory.createCallExpression(
          props.functor.use(props.type),
          undefined,
          [props.input],
        );

  const decode_array = (props: {
    functor: FunctionProgrammer;
    type: Atomic.Literal;
    key: string;
    value: Metadata;
    input: ts.Expression;
  }) => {
    const split: ts.CallChain = ts.factory.createCallChain(
      ts.factory.createPropertyAccessChain(
        ts.factory.createCallChain(
          ts.factory.createPropertyAccessChain(
            props.input,
            ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
            ts.factory.createIdentifier("split"),
          ),
          undefined,
          undefined,
          [
            ts.factory.createStringLiteral(
              props.key === "cookie" ? "; " : ", ",
            ),
          ],
        ),
        ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
        ts.factory.createIdentifier("map"),
      ),
      undefined,
      undefined,
      [props.functor.use(props.type)],
    );
    return ts.factory.createConditionalExpression(
      ExpressionFactory.isArray(props.input),
      undefined,
      ts.factory.createCallExpression(
        IdentifierFactory.access(props.input, "map"),
        undefined,
        [props.functor.use(props.type)],
      ),
      undefined,
      props.value.isRequired() === false
        ? split
        : ts.factory.createBinaryExpression(
            split,
            ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
            ts.factory.createArrayLiteralExpression([], false),
          ),
    );
  };
}

const SINGULAR: Set<string> = new Set([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "server",
  "user-agent",
]);
