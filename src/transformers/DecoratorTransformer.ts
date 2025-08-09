import ts from "typescript";

import { ITypiaContext } from "./ITypiaContext";
import { DecoratorGenericTransformer } from "./features/decorators/DecoratorGenericTransformer";

export namespace DecoratorTransformer {
  export interface IProps {
    context: ITypiaContext;
    method: ts.MethodDeclaration;
  }

  export const transformMethod = (props: IProps): ts.MethodDeclaration => {
    const decorators = (props.method as any).decorators as ts.Decorator[] | undefined;
    if (!decorators) {
      return props.method;
    }

    let transformedMethod = props.method;

    // Process each decorator
    for (const decorator of decorators) {
      const result = transform({
        context: props.context,
        decorator,
        method: transformedMethod,
      });
      
      if (result) {
        transformedMethod = result;
      }
    }

    return transformedMethod;
  };

  export const transform = (props: {
    context: ITypiaContext;
    decorator: ts.Decorator;
    method: ts.MethodDeclaration;
  }): ts.MethodDeclaration | null => {
    // Check if this is a typia decorator
    if (!ts.isCallExpression(props.decorator.expression)) {
      return null;
    }

    const callExpression = props.decorator.expression;
    if (!ts.isPropertyAccessExpression(callExpression.expression)) {
      return null;
    }

    const propertyAccess = callExpression.expression;
    if (!ts.isPropertyAccessExpression(propertyAccess.expression)) {
      return null;
    }

    const typia = propertyAccess.expression;
    if (!ts.isIdentifier(typia.expression) || typia.expression.text !== "typia") {
      return null;
    }

    if (!ts.isIdentifier(typia.name) || typia.name.text !== "decorators") {
      return null;
    }

    const decoratorName = propertyAccess.name.text;

    // Map decorator names to configurations
    const config = getDecoratorConfig(decoratorName);
    if (!config) {
      return null;
    }

    // Use the generic transformer
    return DecoratorGenericTransformer.transform({
      method: decoratorName,
      config: config.config,
      programmer: config.programmer,
    })({
      context: props.context,
      decorator: props.decorator,
      method: props.method,
      expression: callExpression,
    });
  };

  const getDecoratorConfig = (decoratorName: string) => {
    // Import the programmers dynamically to avoid circular dependencies
    const { DecoratorAssertParametersProgrammer } = require("../programmers/decorators/DecoratorAssertParametersProgrammer");
    
    const configs: Record<string, DecoratorGenericTransformer.ISpecification> = {
      assert: {
        method: "assert",
        config: { equals: false },
        programmer: DecoratorAssertParametersProgrammer.write,
      },
      assertEquals: {
        method: "assertEquals", 
        config: { equals: true },
        programmer: DecoratorAssertParametersProgrammer.write,
      },
      is: {
        method: "is",
        config: { equals: false },
        programmer: DecoratorAssertParametersProgrammer.write, // TODO: Create DecoratorIsParametersProgrammer
      },
      equals: {
        method: "equals",
        config: { equals: true },
        programmer: DecoratorAssertParametersProgrammer.write, // TODO: Create DecoratorIsParametersProgrammer
      },
      validate: {
        method: "validate",
        config: { equals: false },
        programmer: DecoratorAssertParametersProgrammer.write, // TODO: Create DecoratorValidateParametersProgrammer
      },
      validateEquals: {
        method: "validateEquals",
        config: { equals: true },
        programmer: DecoratorAssertParametersProgrammer.write, // TODO: Create DecoratorValidateParametersProgrammer
      },
    };

    return configs[decoratorName];
  };
}