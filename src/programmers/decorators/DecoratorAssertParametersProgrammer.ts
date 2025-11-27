import ts from "typescript";

import { FunctionalAssertParametersProgrammer } from "../functional/FunctionalAssertParametersProgrammer";

import { ITypiaContext } from "../../transformers/ITypiaContext";

export namespace DecoratorAssertParametersProgrammer {
  export interface IConfig {
    equals: boolean;
  }
  
  export interface IProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    method: ts.MethodDeclaration;
    expression: ts.Expression;
    init?: ts.Expression | undefined;
  }

  export const write = (props: IProps): ts.Expression => {
    // Convert the method to a function declaration for the functional programmer
    const functionDeclaration = createFunctionDeclarationFromMethod(props.method);
    
    // Reuse the functional programmer logic
    return FunctionalAssertParametersProgrammer.write({
      context: props.context,
      modulo: props.modulo,
      config: props.config,
      declaration: functionDeclaration,
      expression: props.expression,
      init: props.init,
    });
  };

  const createFunctionDeclarationFromMethod = (
    method: ts.MethodDeclaration,
  ): ts.FunctionDeclaration => {
    // Create a synthetic function declaration that matches the method signature
    return ts.factory.createFunctionDeclaration(
      method.modifiers?.filter(ts.isModifier),
      method.asteriskToken,
      ts.factory.createIdentifier("__method"),
      method.typeParameters,
      method.parameters,
      method.type,
      method.body || ts.factory.createBlock([]),
    );
  };
}