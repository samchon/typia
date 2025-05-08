import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { IJsonSchemaCollection } from "../../../schemas/json/IJsonSchemaCollection";
import { Metadata } from "../../../schemas/metadata/Metadata";

import { JsonSchemasProgrammer } from "../../../programmers/json/JsonSchemasProgrammer";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace JsonSchemasTransformer {
  export const transform = (
    props: Pick<ITransformProps, "context" | "expression">,
  ): ts.Expression => {
    if (!props.expression.typeArguments?.length)
      throw new TransformerError({
        code: "typia.json.schemas",
        message: "no generic argument.",
      });

    //----
    // GET ARGUMENTS
    //----
    // VALIDATE TUPLE ARGUMENTS
    const top: ts.Node = props.expression.typeArguments[0]!;
    if (!ts.isTupleTypeNode(top)) return props.expression;
    else if (top.elements.some((child) => !ts.isTypeNode(child)))
      return props.expression;

    // GET TYPES
    const types: ts.Type[] = top.elements.map((child) =>
      props.context.checker.getTypeFromTypeNode(child as ts.TypeNode),
    );
    if (types.some((t) => t.isTypeParameter()))
      throw new TransformerError({
        code: "typia.json.schemas",
        message: "non-specified generic argument(s).",
      });

    // ADDITIONAL PARAMETERS
    const version: "3.0" | "3.1" = getParameter<"3.0" | "3.1">({
      checker: props.context.checker,
      name: "Version",
      is: (str) => str === "3.0" || str === "3.1",
      cast: (str) => str as "3.0" | "3.1",
      default: () => "3.1",
    })(props.expression.typeArguments[1]);

    //----
    // GENERATORS
    //----
    // METADATA
    const analyze = (validate: boolean): Metadata[] => {
      const results: ValidationPipe<Metadata, MetadataFactory.IError>[] =
        types.map((type) =>
          MetadataFactory.analyze({
            checker: props.context.checker,
            transformer: props.context.transformer,
            options: {
              absorb: validate,
              constant: true,
              escape: true,
              validate:
                validate === true ? JsonSchemasProgrammer.validate : undefined,
            },
            collection: new MetadataCollection({
              replace: MetadataCollection.replace,
            }),
            type,
          }),
        );
      const metadatas: Metadata[] = [];
      const errors: MetadataFactory.IError[] = [];
      for (const r of results) {
        if (r.success === false) errors.push(...r.errors);
        else metadatas.push(r.data);
      }
      if (errors.length)
        throw TransformerError.from({
          code: "typia.json.schemas",
          errors,
        });
      return metadatas;
    };
    analyze(true);

    // APPLICATION
    const collection: IJsonSchemaCollection<any> = JsonSchemasProgrammer.write({
      version,
      metadatas: analyze(false),
    });
    return ts.factory.createAsExpression(
      LiteralFactory.write(collection),
      props.context.importer.type({
        file: "typia",
        name: "IJsonSchemaCollection",
        arguments: [
          ts.factory.createLiteralTypeNode(
            ts.factory.createStringLiteral(version),
          ),
        ],
      }),
    );
  };

  const getParameter =
    <Value>(props: {
      checker: ts.TypeChecker;
      name: string;
      is: (value: string) => boolean;
      cast: (value: string) => Value;
      default: () => Value;
    }) =>
    (node: ts.TypeNode | undefined): Value => {
      if (!node) return props.default();

      // CHECK LITERAL TYPE
      const type: ts.Type = props.checker.getTypeFromTypeNode(node);
      if (
        !type.isLiteral() &&
        (type.getFlags() & ts.TypeFlags.BooleanLiteral) === 0
      )
        throw new TransformerError({
          code: "typia.json.schemas",
          message: `generic argument "${props.name}" must be constant.`,
        });

      // GET VALUE AND VALIDATE IT
      const value = type.isLiteral()
        ? type.value
        : props.checker.typeToString(type);
      if (typeof value !== "string" || props.is(value) === false)
        throw new TransformerError({
          code: "typia.json.schemas",
          message: `invalid value on generic argument "${props.name}".`,
        });
      return props.cast(value);
    };
}
