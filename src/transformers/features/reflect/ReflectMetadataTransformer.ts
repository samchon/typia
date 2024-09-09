import ts from "typescript";

import { LiteralFactory } from "../../../factories/LiteralFactory";
import { MetadataCollection } from "../../../factories/MetadataCollection";
import { MetadataFactory } from "../../../factories/MetadataFactory";

import { IMetadataApplication } from "../../../schemas/metadata/IMetadataApplication";
import { Metadata } from "../../../schemas/metadata/Metadata";

import { IProject } from "../../IProject";
import { TransformerError } from "../../TransformerError";

export namespace ReflectMetadataTransformer {
  export const transform =
    (project: IProject) =>
    (expression: ts.CallExpression): ts.Expression => {
      if (!expression.typeArguments?.length)
        throw new TransformerError({
          code: "typia.reflect.metadata",
          message: "no generic argument.",
        });

      // VALIDATE TUPLE ARGUMENTS
      const top: ts.Node = expression.typeArguments[0]!;
      if (!ts.isTupleTypeNode(top)) return expression;
      else if (top.elements.some((child) => !ts.isTypeNode(child)))
        return expression;

      // GET TYPES
      const types: ts.Type[] = top.elements.map((child) =>
        project.checker.getTypeFromTypeNode(child as ts.TypeNode),
      );
      if (types.some((t) => t.isTypeParameter()))
        throw new TransformerError({
          code: "typia.reflect.metadata",
          message: "non-specified generic argument(s).",
        });

      // METADATA
      const collection: MetadataCollection = new MetadataCollection();
      const metadatas: Array<Metadata> = types.map((type) => {
        const result = MetadataFactory.analyze(
          project.checker,
          project.context,
        )({
          escape: true,
          constant: true,
          absorb: true,
          functional: true,
        })(collection)(type);
        if (result.success === false)
          throw TransformerError.from("typia.reflect.metadata")(result.errors);
        return result.data;
      });

      // CONVERT TO PRIMITIVE TYPE
      const app: IMetadataApplication = {
        metadatas: metadatas.map((metadata) => metadata.toJSON()),
        components: collection.toJSON(),
      };
      return LiteralFactory.generate(app);
    };
}
