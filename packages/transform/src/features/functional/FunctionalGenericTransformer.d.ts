import { ITypiaContext } from "@typia/core";
import ts from "typescript";
import { ITransformProps } from "../../ITransformProps";
export declare namespace FunctionalGenericTransformer {
    interface IConfig {
        equals: boolean;
    }
    interface ISpecification {
        method: string;
        config: IConfig;
        programmer: (p: {
            context: ITypiaContext;
            modulo: ts.LeftHandSideExpression;
            expression: ts.Expression;
            declaration: ts.FunctionDeclaration;
            config: IConfig;
            init?: ts.Expression;
        }) => ts.Expression;
    }
    const transform: (spec: ISpecification) => (props: ITransformProps) => ts.Expression;
}
