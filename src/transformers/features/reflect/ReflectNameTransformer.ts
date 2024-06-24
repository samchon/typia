import ts from "typescript";

import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { ValidationPipe } from "../../../typings/ValidationPipe";

import { IProject } from "../../IProject";
import { TransformerError } from "../../TransformerError";

export namespace ReflectNameTransformer {
  export const transform =
    (project: IProject) =>
    (expression: ts.CallExpression): ts.Expression => {
      if (!expression.typeArguments?.length)
        throw new TransformerError({
          code: "typia.reflect.metadata",
          message: "no generic argument.",
        });
      const top: ts.Node = expression.typeArguments[0]!;
      const regular: boolean = (() => {
        // CHECK SECOND ARGUMENT EXISTENCE
        const second: ts.Node | undefined = expression.typeArguments[1]!;
        if (second === undefined) return false;

        // GET BOOELAN VALUE
        const value: Metadata = getMetadata(project)(second);
        return value.size() === 1 &&
          value.constants.length === 1 &&
          value.constants[0]!.type === "boolean" &&
          value.constants[0]!.values.length === 1
          ? (value.constants[0]!.values[0]!.value as boolean)
          : false;
      })();

      // RETURNS NAME
      return ts.factory.createStringLiteral(
        regular ? getMetadata(project)(top).getName() : top.getFullText(),
      );
    };
}

const getMetadata =
  (project: IProject) =>
  (node: ts.Node): Metadata => {
    const type: ts.Type = project.checker.getTypeFromTypeNode(
      node as ts.TypeNode,
    );
    const collection: MetadataCollection = new MetadataCollection({
      replace: MetadataCollection.replace,
    });
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze(
        project.checker,
        project.context,
      )({
        escape: false,
        constant: true,
        absorb: false,
      })(collection)(type);
    if (result.success === false)
      throw TransformerError.from("typia.reflect.name")(result.errors);
    return result.data;
  };
