import { ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { IProgrammerProps } from "../../context/IProgrammerProps";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { MetadataCollection } from "../../schemas/metadata/MetadataCollection";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { FeatureProgrammer } from "../internal/FeatureProgrammer";
import { LlmParametersProgrammer } from "./LlmParametersProgrammer";

export namespace LlmParseProgrammer {
  export interface IProps extends IProgrammerProps {
    config?: Partial<ILlmSchema.IConfig>;
  }

  export const decompose = (props: {
    context: IProps["context"];
    config?: Partial<ILlmSchema.IConfig>;
    modulo: ts.LeftHandSideExpression;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // Generate LLM schema from type
    const schema: ILlmSchema.IParameters = writeSchema({
      context: props.context,
      config: props.config,
      type: props.type,
    });

    return {
      functions: {},
      statements: [
        StatementFactory.constant({
          name: "__schema",
          type: props.context.importer.type({
            file: "typia",
            name: ts.factory.createQualifiedName(
              ts.factory.createIdentifier("ILlmSchema"),
              ts.factory.createIdentifier("IParameters"),
            ),
          }),
          value: LiteralFactory.write(schema),
        }),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("string"))],
        props.context.importer.type({
          file: "typia",
          name: "IJsonParseResult",
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
        ts.factory.createCallExpression(
          props.context.importer.internal("parseLlmArguments"),
          undefined,
          [
            ts.factory.createIdentifier("input"),
            ts.factory.createIdentifier("__schema"),
          ],
        ),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      context: props.context,
      config: props.config,
      modulo: props.modulo,
      functor,
      type: props.type,
      name: props.name,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };

  export const validate = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    metadata: MetadataSchema;
    explore: MetadataFactory.IExplore;
  }): string[] => LlmParametersProgrammer.validate(props);

  const writeSchema = (props: {
    context: IProps["context"];
    config?: Partial<ILlmSchema.IConfig>;
    type: ts.Type;
  }): ILlmSchema.IParameters => {
    const result = MetadataFactory.analyze({
      checker: props.context.checker,
      transformer: props.context.transformer,
      options: {
        absorb: false,
        escape: true,
        constant: true,
      },
      components: new MetadataCollection({
        replace: MetadataCollection.replace,
      }),
      type: props.type,
    });
    if (result.success === false)
      throw new Error("Failed to analyze type for LLM parse.");
    return LlmParametersProgrammer.write({
      metadata: result.data,
      config: props.config,
    });
  };
}
