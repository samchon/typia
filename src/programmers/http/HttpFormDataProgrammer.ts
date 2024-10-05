import ts from "typescript";

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

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpFormDataProgrammer {
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
            ts.factory.createTypeReferenceNode("FormData"),
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
      if (meta.nullable === true) insert("formdata parameters cannot be null.");
      if (meta.isRequired() === false)
        insert("formdata parameters cannot be undefined.");
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
        meta.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) +
        meta.natives.filter((n) => n === "Blob" || n === "File").length;
      if (atomics.size > 1) insert("union type is not allowed in array.");
      if (meta.size() !== expected)
        insert(
          "only atomic, constant or blob (file) types are allowed in array.",
        );
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
        meta.natives.filter((n) => n !== "Blob" && n !== "File").length
      )
        insert("nested object type is not allowed.");
    }
    return errors;
  };

  const decode_object = (props: {
    functor: FunctionProgrammer;
    object: MetadataObject;
  }): ts.Statement[] => {
    // const input: ts.Identifier = ts.factory.createIdentifier("input");
    const output: ts.Identifier = ts.factory.createIdentifier("output");
    return [
      StatementFactory.constant({
        name: "output",
        value: ts.factory.createObjectLiteralExpression(
          props.object.properties.map((p) =>
            decode_regular_property({
              functor: props.functor,
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
    functor: FunctionProgrammer;
    property: MetadataProperty;
  }): ts.PropertyAssignment => {
    const key: string = props.property.key.constants[0]!.values[0]!
      .value as string;
    const value: Metadata = props.property.value;

    const [type, isArray]: [Atomic.Literal | "blob" | "file", boolean] = value
      .atomics.length
      ? [value.atomics[0]!.type, false]
      : value.constants.length
        ? [value.constants[0]!.type, false]
        : value.templates.length
          ? ["string", false]
          : value.natives.includes("Blob")
            ? ["blob", false]
            : value.natives.includes("File")
              ? ["file", false]
              : (() => {
                  const meta =
                    value.arrays[0]?.type.value ??
                    value.tuples[0]!.type.elements[0]!;
                  return meta.atomics.length
                    ? [meta.atomics[0]!.type, true]
                    : meta.templates.length
                      ? ["string", true]
                      : meta.natives.includes("Blob")
                        ? ["blob", true]
                        : meta.natives.includes("File")
                          ? ["file", true]
                          : [meta.constants[0]!.type, true];
                })();
    return ts.factory.createPropertyAssignment(
      Escaper.variable(key) ? key : ts.factory.createStringLiteral(key),
      isArray
        ? decode_array({
            functor: props.functor,
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
                    functor: props.functor,
                    type,
                    coalesce: false,
                    input: ts.factory.createIdentifier("elem"),
                  }),
                ),
              ],
            ),
          })
        : decode_value({
            functor: props.functor,
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
    functor: FunctionProgrammer;
    type: Atomic.Literal | "blob" | "file";
    coalesce: boolean;
    input: ts.Expression;
  }) => {
    const call = ts.factory.createCallExpression(
      props.functor.use(props.type),
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
    functor: FunctionProgrammer;
    metadata: Metadata;
    input: ts.Expression;
  }): ts.Expression =>
    props.metadata.nullable || props.metadata.isRequired() === false
      ? ts.factory.createCallExpression(props.functor.use("array"), undefined, [
          props.input,
          props.metadata.nullable
            ? ts.factory.createNull()
            : ts.factory.createIdentifier("undefined"),
        ])
      : props.input;
}
