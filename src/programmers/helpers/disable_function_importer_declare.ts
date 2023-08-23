import ts from "typescript";

import { FunctionImporter } from "./FunctionImporeter";

export const disable_function_importer_declare = (
    importer: FunctionImporter,
): FunctionImporter => disable(importer) as FunctionImporter;

const disable = (importer: FunctionImporter): MethodOnly<FunctionImporter> => ({
    method: importer.method,
    empty: (): boolean => importer.empty(),
    use: (name: string): ts.Identifier => importer.use(name),
    useLocal: (name: string): string => importer.useLocal(name),
    hasLocal: (name: string): boolean => importer.hasLocal(name),
    declare: (_modulo: ts.LeftHandSideExpression): ts.Statement[] => [],
    declareUnions: (): ts.Statement[] => [],
    increment: (): number => importer.increment(),
    emplaceUnion: (
        prefix: string,
        name: string,
        factory: () => ts.ArrowFunction,
    ): string => importer.emplaceUnion(prefix, name, factory),
    trace: (): void => importer.trace(),
});

type MethodOnly<T> = {
    [P in keyof T]: T[P] extends Function
        ? T[P]
        : P extends "method"
        ? T[P]
        : never;
};
