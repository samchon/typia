import ts from "typescript";

import { FunctionProgrammer } from "./FunctionProgrammer";

export const disable_function_programmer_declare = (
  functor: FunctionProgrammer,
): FunctionProgrammer => disable(functor) as FunctionProgrammer;

const disable = (
  functor: FunctionProgrammer,
): MethodOnly<FunctionProgrammer> => ({
  method: functor.method,
  useLocal: (name: string): string => functor.useLocal(name),
  hasLocal: (name: string): boolean => functor.hasLocal(name),
  declare: (): ts.Statement[] => [],
  declareUnions: (): ts.Statement[] => [],
  increment: (): number => functor.increment(),
  emplaceUnion: (
    prefix: string,
    name: string,
    factory: () => ts.ArrowFunction,
  ): string => functor.emplaceUnion(prefix, name, factory),
  emplaceVariable: (key, value) => functor.emplaceVariable(key, value),
});

type MethodOnly<T> = {
  [P in keyof T]: T[P] extends Function
    ? T[P]
    : P extends "method"
      ? T[P]
      : never;
};
