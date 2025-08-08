import ts from "typescript";

import { ITypiaContext } from "./ITypiaContext";

export namespace DecoratorTransformer {
  export const transform = (props: {
    context: ITypiaContext;
    decorator: ts.Decorator;
  }): ts.Decorator | null => {
    // For now, just return the original decorator
    // TODO: Implement decorator transformation logic
    return props.decorator;
  };
}