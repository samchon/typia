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

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { Escaper } from "../../utils/Escaper";

import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpFormDataProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string): ts.ArrowFunction => {
      // GET OBJECT TYPE
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const collection: MetadataCollection = new MetadataCollection();
      const result = MetadataFactory.analyze(
        project.checker,
        project.context,
      )({
        escape: false,
        constant: true,
        absorb: true,
        validate,
      })(collection)(type);
      if (result.success === false)
        throw TransformerError.from(`typia.http.${importer.method}`)(
          result.errors,
        );

      // DO TRANSFORM
      const object: MetadataObject = result.data.objects[0]!;
      const statements: ts.Statement[] = decode_object(importer)(object);
      return ts.factory.createArrowFunction(
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
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
          ],
          false,
        ),
        undefined,
        ts.factory.createBlock(
          [...importer.declare(modulo), ...statements],
          true,
        ),
      );
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

  const decode_object =
    (importer: FunctionImporter) =>
    (object: MetadataObject): ts.Statement[] => {
      // const input: ts.Identifier = ts.factory.createIdentifier("input");
      const output: ts.Identifier = ts.factory.createIdentifier("output");
      return [
        StatementFactory.constant(
          "output",
          ts.factory.createObjectLiteralExpression(
            object.properties.map((prop) =>
              decode_regular_property(importer)(prop),
            ),
            true,
          ),
        ),
        ts.factory.createReturnStatement(
          ts.factory.createAsExpression(output, TypeFactory.keyword("any")),
        ),
      ];
    };

  const decode_regular_property =
    (importer: FunctionImporter) =>
    (property: MetadataProperty): ts.PropertyAssignment => {
      const key: string = property.key.constants[0]!.values[0] as string;
      const value: Metadata = property.value;

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
              value.arrays[0]?.type.value ?? value.tuples[0]!.type.elements[0]!;
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
          ? decode_array(importer)(value)(
              ts.factory.createCallExpression(
                IdentifierFactory.access(
                  ts.factory.createCallExpression(
                    ts.factory.createIdentifier("input.getAll"),
                    undefined,
                    [ts.factory.createStringLiteral(key)],
                  ),
                )("map"),
                undefined,
                [
                  ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [IdentifierFactory.parameter("elem")],
                    undefined,
                    undefined,
                    decode_value(importer)(type)(false)(
                      ts.factory.createIdentifier("elem"),
                    ),
                  ),
                ],
              ),
            )
          : decode_value(importer)(type)(
              value.nullable === false && value.isRequired() === false,
            )(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("input.get"),
                undefined,
                [ts.factory.createStringLiteral(key)],
              ),
            ),
      );
    };

  const decode_value =
    (importer: FunctionImporter) =>
    (type: Atomic.Literal | "blob" | "file") =>
    (onlyUndefindable: boolean) =>
    (value: ts.Expression) => {
      const call = ts.factory.createCallExpression(
        importer.use(type),
        undefined,
        [value],
      );
      return onlyUndefindable
        ? ts.factory.createBinaryExpression(
            call,
            ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
            ts.factory.createIdentifier("undefined"),
          )
        : call;
    };

  const decode_array =
    (importer: FunctionImporter) =>
    (value: Metadata) =>
    (expression: ts.Expression): ts.Expression =>
      value.nullable || value.isRequired() === false
        ? ts.factory.createCallExpression(importer.use("array"), undefined, [
            expression,
            value.nullable
              ? ts.factory.createNull()
              : ts.factory.createIdentifier("undefined"),
          ])
        : expression;
}
