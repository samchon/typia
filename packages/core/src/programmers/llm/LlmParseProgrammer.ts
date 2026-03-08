import { ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { IProgrammerProps } from "../../context/IProgrammerProps";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
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
    metadata: MetadataSchema;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // Generate LLM schema from metadata
    const schema: ILlmSchema.IParameters =
      LlmParametersProgrammer.writeParameters({
        metadata: props.metadata,
        config: props.config,
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
            ts.factory.createTypeReferenceNode(props.name ?? "unknown"),
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

  export interface IWriteProps {
    context: IProps["context"];
    modulo: ts.LeftHandSideExpression;
    metadata: MetadataSchema;
    config?: Partial<ILlmSchema.IConfig>;
    name?: string;
  }

  export const write = (props: IWriteProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      context: props.context,
      config: props.config,
      modulo: props.modulo,
      functor,
      metadata: props.metadata,
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
}
