import { ILlmSchema } from "@typia/interface";
import ts from "@typescript/native-preview";

import { IProgrammerProps } from "../../context/IProgrammerProps";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { LiteralFactory } from "../../factories/LiteralFactory";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";
import { FeatureProgrammer } from "../internal/FeatureProgrammer";
import { LlmParametersProgrammer } from "./LlmParametersProgrammer";

export namespace LlmStructuredOutputProgrammer {
  export interface IProps extends IProgrammerProps {
    config?: Partial<ILlmSchema.IConfig & { equals: boolean }>;
  }

  export interface IWriteProps {
    context: IProps["context"];
    modulo: ts.LeftHandSideExpression;
    type: ts.Type;
    metadata: MetadataSchema;
    config?: Partial<ILlmSchema.IConfig & { equals: boolean }>;
    name?: string;
  }

  export const write = (props: IWriteProps): ts.CallExpression => {
    const functor: FunctionProgrammer = new FunctionProgrammer(
      props.modulo.getText(),
    );

    // Generate LLM parameters schema
    const schema: ILlmSchema.IParameters =
      LlmParametersProgrammer.writeParameters({
        metadata: props.metadata,
        config: props.config,
      });

    // Generate validate function
    const equals: boolean = props.config?.equals ?? false;
    const validateDecomposed: FeatureProgrammer.IDecomposed =
      ValidateProgrammer.decompose({
        context: props.context,
        modulo: props.modulo,
        functor,
        config: { equals },
        type: props.type,
        name: props.name,
      });

    const typeName = props.name ?? "unknown";

    const result: FeatureProgrammer.IDecomposed = {
      functions: {
        ...validateDecomposed.functions,
      },
      statements: [
        // Schema constant
        StatementFactory.constant({
          name: "__parameters",
          type: props.context.importer.type({
            file: "typia",
            name: ts.factory.createQualifiedName(
              ts.factory.createIdentifier("ILlmSchema"),
              ts.factory.createIdentifier("IParameters"),
            ),
          }),
          value: LiteralFactory.write(schema),
        }),
        // Validate function statements
        ...validateDecomposed.statements,
        // Validate function
        StatementFactory.constant({
          name: "__validate",
          value: validateDecomposed.arrow,
        }),
      ],
      // Return object literal directly, not a function
      // Cast to ArrowFunction to satisfy FeatureProgrammer.IDecomposed type
      arrow: ts.factory.createAsExpression(
        ts.factory.createObjectLiteralExpression(
          [
            // parameters
            ts.factory.createPropertyAssignment(
              "parameters",
              ts.factory.createIdentifier("__parameters"),
            ),
            // parse
            ts.factory.createPropertyAssignment(
              "parse",
              ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                  IdentifierFactory.parameter(
                    "input",
                    TypeFactory.keyword("string"),
                  ),
                ],
                props.context.importer.type({
                  file: "typia",
                  name: "IJsonParseResult",
                  arguments: [ts.factory.createTypeReferenceNode(typeName)],
                }),
                undefined,
                ts.factory.createCallExpression(
                  props.context.importer.internal("parseLlmArguments"),
                  undefined,
                  [
                    ts.factory.createIdentifier("input"),
                    ts.factory.createIdentifier("__parameters"),
                  ],
                ),
              ),
            ),
            // coerce
            ts.factory.createPropertyAssignment(
              "coerce",
              ts.factory.createArrowFunction(
                undefined,
                undefined,
                [
                  IdentifierFactory.parameter(
                    "input",
                    ts.factory.createTypeReferenceNode(typeName),
                  ),
                ],
                ts.factory.createTypeReferenceNode(typeName),
                undefined,
                ts.factory.createCallExpression(
                  props.context.importer.internal("coerceLlmArguments"),
                  undefined,
                  [
                    ts.factory.createIdentifier("input"),
                    ts.factory.createIdentifier("__parameters"),
                  ],
                ),
              ),
            ),
            // validate
            ts.factory.createPropertyAssignment(
              "validate",
              ts.factory.createIdentifier("__validate"),
            ),
          ],
          true,
        ),
        props.context.importer.type({
          file: "typia",
          name: "ILlmStructuredOutput",
          arguments: [ts.factory.createTypeReferenceNode(typeName)],
        }),
      ) as any as ts.ArrowFunction,
    };

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
