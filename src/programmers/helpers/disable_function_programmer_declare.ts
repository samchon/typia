import ts from "typescript";

import { FunctionProgrammer } from "./FunctionProgrammer";

export const disable_function_programmer_declare = (
  functor: FunctionProgrammer,
): FunctionProgrammer => disable(functor) as FunctionProgrammer;

const disable = (
  functor: FunctionProgrammer,
): MethodOnly<FunctionProgrammer> => ({
  method: functor.method,
  empty: (): boolean => functor.empty(),
  use: (name: string): ts.Identifier => functor.use(name),
  useLocal: (name: string): string => functor.useLocal(name),
  hasLocal: (name: string): boolean => functor.hasLocal(name),
  declare: (_modulo: ts.LeftHandSideExpression): ts.Statement[] => [],
  declareUnions: (): ts.Statement[] => [],
  increment: (): number => functor.increment(),
  emplaceUnion: (
    prefix: string,
    name: string,
    factory: () => ts.ArrowFunction,
  ): string => functor.emplaceUnion(prefix, name, factory),
  emplaceVariable: (key, value) => functor.emplaceVariable(key, value),
  trace: (): void => functor.trace(),
});

type MethodOnly<T> = {
  [P in keyof T]: T[P] extends Function
    ? T[P]
    : P extends "method"
      ? T[P]
      : never;
};
