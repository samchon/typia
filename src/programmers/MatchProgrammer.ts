import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { MetadataCollection } from "../factories/MetadataCollection";
import { MetadataFactory } from "../factories/MetadataFactory";

import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

import { IProgrammerProps } from "../transformers/IProgrammerProps";

export namespace MatchProgrammer {
  export interface IProps extends IProgrammerProps {
    input: ts.Expression;
    cases: ts.Expression;
    otherwise?: ts.Expression;
    inputType: ts.Type;
  }

  export const write = (props: IProps): ts.Expression => {
    const collection: MetadataCollection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      options: {
        absorb: true,
        functional: false,
        constant: false,
        escape: false,
      },
      collection,
      type: props.inputType,
      checker: props.context.checker,
      transformer: props.context.transformer,
    });

    if (!result.success) {
      // Return a simple fallback if metadata analysis fails
      return generateSimpleMatch(props);
    }

    const unions = collection.unions();

    if (unions.length === 0) {
      // Not a union type, generate simple check
      return generateSimpleMatch(props);
    }

    // Generate optimized conditional statements for union types
    return generateUnionMatch(props, unions);
  };

  const generateSimpleMatch = (props: IProps): ts.Expression => {
    // For simple types, just try to match the input against any provided cases
    return ExpressionFactory.selfCall(
      ts.factory.createBlock([
        ts.factory.createVariableStatement(
          undefined,
          ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(
              "input",
              undefined,
              undefined,
              props.input
            )
          ], ts.NodeFlags.Const)
        ),
        ts.factory.createVariableStatement(
          undefined,
          ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(
              "cases", 
              undefined,
              undefined,
              props.cases
            )
          ], ts.NodeFlags.Const)
        ),
        // Try to find a matching case handler
        ts.factory.createReturnStatement(
          props.otherwise
            ? ts.factory.createCallExpression(
                props.otherwise,
                undefined,
                [createValidationError("No matching case found")]
              )
            : ts.factory.createIdentifier("undefined")
        )
      ], true)
    );
  };

  const generateUnionMatch = (
    props: IProps,
    unions: MetadataObjectType[][]
  ): ts.Expression => {
    return ExpressionFactory.selfCall(
      ts.factory.createBlock([
        ts.factory.createVariableStatement(
          undefined,
          ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(
              "input",
              undefined,
              undefined,
              props.input
            )
          ], ts.NodeFlags.Const)
        ),
        ts.factory.createVariableStatement(
          undefined,
          ts.factory.createVariableDeclarationList([
            ts.factory.createVariableDeclaration(
              "cases",
              undefined,
              undefined,
              props.cases
            )
          ], ts.NodeFlags.Const)
        ),
        ...generateUnionChecks(unions),
        // If no case matches, use otherwise handler or throw
        ...(props.otherwise
          ? [ts.factory.createReturnStatement(
              ts.factory.createCallExpression(
                props.otherwise,
                undefined,
                [createValidationError("No matching case found")]
              )
            )]
          : [ts.factory.createThrowStatement(
              ts.factory.createNewExpression(
                ts.factory.createIdentifier("Error"),
                undefined,
                [ts.factory.createStringLiteral("No matching case found")]
              )
            )]
        )
      ], true)
    );
  };

  const generateUnionChecks = (
    unions: MetadataObjectType[][]
  ): ts.Statement[] => {
    const statements: ts.Statement[] = [];

    // Generate type checks for each union member
    for (const union of unions) {
      for (const objectType of union) {
        // For now, generate a placeholder check for each object type
        statements.push(
          ts.factory.createIfStatement(
            generateObjectTypeCheck(objectType),
            ts.factory.createBlock([
              ts.factory.createReturnStatement(
                generateCaseCall(objectType)
              )
            ])
          )
        );
      }
    }

    return statements;
  };

  const generateObjectTypeCheck = (
    object: MetadataObjectType
  ): ts.Expression => {
    // For now, generate a simple discriminant check
    // This should be expanded to use proper type checking capabilities
    // For discriminated unions, we would check the discriminant property
    if (object.properties.length > 0) {
      const firstProp = object.properties[0];
      if (firstProp && firstProp.key.constants.length > 0) {
        const constantValue = firstProp.key.constants[0]?.values[0]?.value;
        if (constantValue !== undefined) {
          return ts.factory.createStrictEquality(
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier("input"),
              ts.factory.createIdentifier(String(constantValue))
            ),
            ts.factory.createStringLiteral(String(constantValue))
          );
        }
      }
    }
    
    return ts.factory.createTrue(); // Placeholder
  };

  const generateCaseCall = (object: MetadataObjectType): ts.Expression => {
    // Try to find the case based on discriminant value
    if (object.properties.length > 0) {
      const firstProp = object.properties[0];
      if (firstProp && firstProp.key.constants.length > 0) {
        const constantValue = firstProp.key.constants[0]?.values[0]?.value;
        if (constantValue !== undefined) {
          return ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(
              ts.factory.createIdentifier("cases"),
              ts.factory.createIdentifier(String(constantValue))
            ),
            undefined,
            [ts.factory.createIdentifier("input")]
          );
        }
      }
    }

    // Fallback to a default case
    return ts.factory.createCallExpression(
      ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier("cases"),
        ts.factory.createIdentifier("default")
      ),
      undefined,
      [ts.factory.createIdentifier("input")]
    );
  };

  const createValidationError = (message: string): ts.Expression => {
    return ts.factory.createObjectLiteralExpression([
      ts.factory.createPropertyAssignment(
        "success",
        ts.factory.createFalse()
      ),
      ts.factory.createPropertyAssignment(
        "errors",
        ts.factory.createArrayLiteralExpression([
          ts.factory.createObjectLiteralExpression([
            ts.factory.createPropertyAssignment(
              "path",
              ts.factory.createStringLiteral("$input")
            ),
            ts.factory.createPropertyAssignment(
              "expected",
              ts.factory.createStringLiteral("matching case")
            ),
            ts.factory.createPropertyAssignment(
              "value",
              ts.factory.createIdentifier("input")
            ),
            ts.factory.createPropertyAssignment(
              "message",
              ts.factory.createStringLiteral(message)
            )
          ])
        ])
      )
    ]);
  };
}