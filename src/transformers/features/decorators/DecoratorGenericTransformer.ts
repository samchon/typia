import ts from "typescript";

import { ITypiaContext } from "../../ITypiaContext";

export namespace DecoratorGenericTransformer {
  export interface IConfig {
    equals: boolean;
  }
  
  export interface ISpecification {
    method: string;
    config: IConfig;
    programmer: (p: {
      context: ITypiaContext;
      modulo: ts.LeftHandSideExpression;
      expression: ts.Expression;
      method: ts.MethodDeclaration;
      config: IConfig;
      init?: ts.Expression;
    }) => ts.Expression;
  }
  
  export const transform =
    (spec: ISpecification) =>
    (props: {
      context: ITypiaContext;
      decorator: ts.Decorator;
      method: ts.MethodDeclaration;
      expression: ts.CallExpression;
    }): ts.MethodDeclaration => {
      // Get the error factory from decorator arguments (if provided)
      const init = props.expression.arguments[0];

      // Create a module reference for the generated code
      const modulo = ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier("typia"),
        "functional",
      );

      // Generate the wrapper function using the programmer
      const wrapperExpression = spec.programmer({
        context: props.context,
        modulo,
        expression: createMethodReference(props.method),
        method: props.method,
        config: spec.config,
        init,
      });

      // Create the transformed method body that calls the wrapper
      const transformedBody = createTransformedMethodBody({
        method: props.method,
        wrapperExpression,
      });

      // Return the method with transformed body and removed decorators
      const decorators = (props.method as any).decorators as ts.Decorator[] | undefined;
      const otherDecorators = decorators?.filter(
        (d: ts.Decorator) => d !== props.decorator,
      );

      // Use object spread to create a new method with updated properties
      const newMethod = Object.assign(Object.create(Object.getPrototypeOf(props.method)), props.method, {
        decorators: otherDecorators,
        body: transformedBody,
      });

      return newMethod as ts.MethodDeclaration;
    };

  const createMethodReference = (method: ts.MethodDeclaration): ts.Expression => {
    // Create a function expression that represents the original method
    return ts.factory.createArrowFunction(
      method.modifiers?.filter(ts.isModifier),
      method.typeParameters,
      method.parameters,
      method.type,
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      method.body || ts.factory.createBlock([]),
    );
  };

  const createTransformedMethodBody = (props: {
    method: ts.MethodDeclaration;
    wrapperExpression: ts.Expression;
  }): ts.Block => {
    // Create parameter references for the wrapper call
    const parameterNames = props.method.parameters.map((param) =>
      ts.isIdentifier(param.name) ? param.name : ts.factory.createIdentifier("param"),
    );

    // Call the generated wrapper function with the parameters
    const wrapperCall = ts.factory.createCallExpression(
      props.wrapperExpression,
      undefined,
      parameterNames,
    );

    return ts.factory.createBlock([
      ts.factory.createReturnStatement(wrapperCall),
    ]);
  };
}