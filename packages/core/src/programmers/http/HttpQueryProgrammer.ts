import { Atomic } from "@typia/interface";
import { NamingConvention } from "@typia/utils";
import ts from "typescript";

import { IProgrammerProps } from "../../context/IProgrammerProps";
import { ITypiaContext } from "../../context/ITypiaContext";
import { TransformerError } from "../../context/TransformerError";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { MetadataArrayType } from "../../schemas/metadata/MetadataArrayType";
import { MetadataCollection } from "../../schemas/metadata/MetadataCollection";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";
import { FeatureProgrammer } from "../internal/FeatureProgrammer";

export namespace HttpQueryProgrammer {
  export interface IProps extends IProgrammerProps {
    allowOptional?: boolean;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    allowOptional: boolean;
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
        validate: (next) =>
          validate({
            metadata: next.metadata,
            explore: next.explore,
            allowOptional: props.allowOptional,
          }),
      },
      components: collection,
      type: props.type,
    });
    if (result.success === false)
      throw TransformerError.from({
        code: props.functor.method,
        errors: result.errors,
      });

    // DO TRANSFORM
    const object: MetadataObjectType = result.data.objects[0]!.type;
    const statements: ts.Statement[] = decode_object({
      context: props.context,
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
            ts.factory.createUnionTypeNode([
              ts.factory.createTypeReferenceNode("string"),
              props.context.importer.type({
                file: "typia",
                name: "IReadableURLSearchParams",
              }),
            ]),
          ),
        ],
        props.context.importer.type({
          file: "typia",
          name: "Resolved",
          arguments: [
            ts.factory.createTypeReferenceNode(
              props.name ??
                TypeFactory.getFullName({
                  checker: props.context.checker,
                  type: props.type,
                }),
            ),
          ],
        }),
        undefined,
        ts.factory.createBlock(statements, true),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
      allowOptional: !!props.allowOptional,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  export const validate = (props: {
    metadata: MetadataSchema;
    explore: MetadataFactory.IExplore;
    allowOptional?: boolean | undefined;
  }): string[] => {
    const errors: string[] = [];
    const insert = (msg: string) => errors.push(msg);

    if (props.explore.top === true) {
      // TOP MUST BE ONLY OBJECT
      if (props.metadata.objects.length !== 1 || props.metadata.bucket() !== 1)
        insert("only one object type is allowed.");
      if (props.metadata.nullable === true)
        insert("query parameters cannot be null.");
      if (props.metadata.isRequired() === false) {
        if (props.allowOptional === true) {
          const everyPropertiesAreOptional: boolean =
            props.metadata.size() === 1 &&
            props.metadata.objects.length === 1 &&
            props.metadata.objects[0]!.type.properties.every(
              (p) => p.value.isRequired() === false,
            );
          if (everyPropertiesAreOptional === false)
            insert(
              "query parameters can be optional only when every properties are optional.",
            );
        } else insert("query parameters cannot be undefined.");
      }
    } else if (
      props.explore.nested !== null &&
      props.explore.nested instanceof MetadataArrayType
    ) {
      //----
      // ARRAY
      //----
      const atomics = HttpMetadataUtil.atomics(props.metadata);
      const expected: number =
        props.metadata.atomics.length +
        props.metadata.templates.length +
        props.metadata.constants
          .map((c) => c.values.length)
          .reduce((a, b) => a + b, 0);
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (props.metadata.size() !== expected)
        insert("only atomic or constant types are allowed in array.");
    } else if (props.explore.object && props.explore.property !== null) {
      //----
      // COMMON
      //----
      // PROPERTY MUST BE SOLE
      if (typeof props.explore.property === "object")
        insert("dynamic property is not allowed.");
      // DO NOT ALLOW TUPLE TYPE
      if (props.metadata.tuples.length) insert("tuple type is not allowed.");
      // DO NOT ALLOW UNION TYPE
      if (HttpMetadataUtil.isUnion(props.metadata))
        insert("union type is not allowed.");
      // DO NOT ALLOW NESTED OBJECT
      if (
        props.metadata.objects.length ||
        props.metadata.sets.length ||
        props.metadata.maps.length ||
        props.metadata.natives.length
      )
        insert("nested object type is not allowed.");
    }
    return errors;
  };

  const decode_object = (props: {
    context: ITypiaContext;
    object: MetadataObjectType;
  }): ts.Statement[] => {
    const input: ts.Identifier = ts.factory.createIdentifier("input");
    const output: ts.Identifier = ts.factory.createIdentifier("output");

    return [
      ts.factory.createExpressionStatement(
        ts.factory.createBinaryExpression(
          input,
          ts.factory.createToken(ts.SyntaxKind.EqualsToken),
          ts.factory.createAsExpression(
            ts.factory.createCallExpression(
              props.context.importer.internal("httpQueryParseURLSearchParams"),
              undefined,
              [input],
            ),
            props.context.importer.type({
              file: "typia",
              name: "IReadableURLSearchParams",
            }),
          ),
        ),
      ),
      StatementFactory.constant({
        name: "output",
        value: ts.factory.createObjectLiteralExpression(
          props.object.properties.map((p) =>
            decode_regular_property({
              context: props.context,
              property: p,
            }),
          ),
          true,
        ),
      }),
      ts.factory.createReturnStatement(
        ts.factory.createAsExpression(output, TypeFactory.keyword("any")),
      ),
    ];
  };

  const decode_regular_property = (props: {
    context: ITypiaContext;
    property: MetadataProperty;
  }): ts.PropertyAssignment => {
    const key: string = props.property.key.constants[0]!.values[0]!
      .value as string;
    const value: MetadataSchema = props.property.value;

    const [type, isArray]: [Atomic.Literal, boolean] = value.atomics.length
      ? [value.atomics[0]!.type, false]
      : value.constants.length
        ? [value.constants[0]!.type, false]
        : value.templates.length
          ? ["string", false]
          : (() => {
              const meta =
                value.arrays[0]?.type.value ??
                value.tuples[0]!.type.elements[0]!;
              return meta.atomics.length
                ? [meta.atomics[0]!.type, true]
                : meta.templates.length
                  ? ["string", true]
                  : [meta.constants[0]!.type, true];
            })();
    return ts.factory.createPropertyAssignment(
      NamingConvention.variable(key)
        ? key
        : ts.factory.createStringLiteral(key),
      isArray
        ? decode_array({
            context: props.context,
            metadata: value,
            input: ts.factory.createCallExpression(
              IdentifierFactory.access(
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("input.getAll"),
                  undefined,
                  [ts.factory.createStringLiteral(key)],
                ),
                "map",
              ),
              undefined,
              [
                ts.factory.createArrowFunction(
                  undefined,
                  undefined,
                  [IdentifierFactory.parameter("elem")],
                  undefined,
                  undefined,
                  decode_value({
                    context: props.context,
                    type,
                    coalesce: false,
                    input: ts.factory.createIdentifier("elem"),
                  }),
                ),
              ],
            ),
          })
        : decode_value({
            context: props.context,
            type,
            coalesce: value.nullable === false && value.isRequired() === false,
            input: ts.factory.createCallExpression(
              ts.factory.createIdentifier("input.get"),
              undefined,
              [ts.factory.createStringLiteral(key)],
            ),
          }),
    );
  };

  const decode_value = (props: {
    context: ITypiaContext;
    type: Atomic.Literal;
    coalesce: boolean;
    input: ts.Expression;
  }) => {
    const call = ts.factory.createCallExpression(
      props.context.importer.internal(
        `httpQueryRead${NamingConvention.capitalize(props.type)}`,
      ),
      undefined,
      [props.input],
    );
    return props.coalesce
      ? ts.factory.createBinaryExpression(
          call,
          ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
          ts.factory.createIdentifier("undefined"),
        )
      : call;
  };

  const decode_array = (props: {
    context: ITypiaContext;
    metadata: MetadataSchema;
    input: ts.Expression;
  }): ts.Expression =>
    props.metadata.nullable || props.metadata.isRequired() === false
      ? ts.factory.createCallExpression(
          props.context.importer.internal("httpQueryReadArray"),
          undefined,
          [
            props.input,
            props.metadata.nullable
              ? ts.factory.createNull()
              : ts.factory.createIdentifier("undefined"),
          ],
        )
      : props.input;
}
