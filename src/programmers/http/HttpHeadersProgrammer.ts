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

import { IProject } from "../../transformers/IProject";
import { TransformerError } from "../../transformers/TransformerError";

import { Atomic } from "../../typings/Atomic";

import { Escaper } from "../../utils/Escaper";
import { MapUtil } from "../../utils/MapUtil";

import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpMetadataUtil } from "../helpers/HttpMetadataUtil";

export namespace HttpHeadersProgrammer {
  export const INPUT_TYPE = "Record<string, string | string[] | undefined>";

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

        MapUtil.take(counter)(key.toLowerCase(), () => new Set()).add(key);
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

  const decode_object =
    (importer: FunctionImporter) =>
    (object: MetadataObject): ts.Statement[] => {
      const output: ts.Identifier = ts.factory.createIdentifier("output");
      const optionals: string[] = [];
      return [
        StatementFactory.constant(
          "output",
          ts.factory.createObjectLiteralExpression(
            object.properties.map((prop) => {
              if (
                !prop.value.isRequired() &&
                prop.value.arrays.length + prop.value.tuples.length > 0
              )
                optionals.push(
                  prop.key.constants[0]!.values[0]!.value as string,
                );
              return decode_regular_property(importer)(prop);
            }),
            true,
          ),
        ),
        ...optionals.map((key) => {
          const access = IdentifierFactory.access(output)(key);
          return ts.factory.createIfStatement(
            ts.factory.createStrictEquality(
              ExpressionFactory.number(0),
              IdentifierFactory.access(access)("length"),
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

  const decode_regular_property =
    (importer: FunctionImporter) =>
    (property: MetadataProperty): ts.PropertyAssignment => {
      const key: string = property.key.constants[0]!.values[0]!.value as string;
      const value: Metadata = property.value;

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
      const accessor = IdentifierFactory.access(
        ts.factory.createIdentifier("input"),
      )(key.toLowerCase());

      return ts.factory.createPropertyAssignment(
        Escaper.variable(key) ? key : ts.factory.createStringLiteral(key),
        isArray
          ? key === "set-cookie"
            ? accessor
            : decode_array(importer)(type)(key)(value)(accessor)
          : decode_value(importer)(type)(accessor),
      );
    };

  const decode_value =
    (importer: FunctionImporter) =>
    (type: Atomic.Literal) =>
    (value: ts.Expression) =>
      type === "string"
        ? value
        : ts.factory.createCallExpression(importer.use(type), undefined, [
            value,
          ]);

  const decode_array =
    (importer: FunctionImporter) =>
    (type: Atomic.Literal) =>
    (key: string) =>
    (value: Metadata) =>
    (accessor: ts.Expression) => {
      const split: ts.CallChain = ts.factory.createCallChain(
        ts.factory.createPropertyAccessChain(
          ts.factory.createCallChain(
            ts.factory.createPropertyAccessChain(
              accessor,
              ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
              ts.factory.createIdentifier("split"),
            ),
            undefined,
            undefined,
            [ts.factory.createStringLiteral(key === "cookie" ? "; " : ", ")],
          ),
          ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
          ts.factory.createIdentifier("map"),
        ),
        undefined,
        undefined,
        [importer.use(type)],
      );
      return ts.factory.createConditionalExpression(
        ExpressionFactory.isArray(accessor),
        undefined,
        ts.factory.createCallExpression(
          IdentifierFactory.access(accessor)("map"),
          undefined,
          [importer.use(type)],
        ),
        undefined,
        value.isRequired() === false
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
