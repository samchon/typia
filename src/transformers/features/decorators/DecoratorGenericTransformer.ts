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
      declaration: ts.MethodDeclaration;
      config: IConfig;
      init?: ts.Expression;
    }) => ts.Expression;
  }
  export const transform =
    (_spec: ISpecification) =>
    (props: {
      context: ITypiaContext;
      decorator: ts.Decorator;
      expression: ts.CallExpression;
    }): ts.Decorator | null => {
      // This is a simplified placeholder - we need to transform the method
      // that this decorator is applied to. For now, return the original decorator
      return props.decorator;
    };
}