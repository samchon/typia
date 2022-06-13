import ts from "typescript";

import { IMetadata } from "../../structures/IMetadata";

import { IdentifierFactory } from "../IdentifierFactory";
import { MetadataCollection } from "../MetadataCollection";

export namespace IsFactory {
    export function generate(
        collection: MetadataCollection,
        meta: IMetadata | null,
    ) {
        const variable = (() => {
            const storage = collection.storage();
            if (Object.entries(storage).length === 0) return null;

            const functors = ts.factory.createObjectLiteralExpression(
                Object.entries(collection.storage()).map(([key, value]) =>
                    ts.factory.createPropertyAssignment(
                        IdentifierFactory.generate(key),
                        generate_object(value),
                    ),
                ),
                true,
            );

            return ts.factory.createVariableDeclaration(
                "functors",
                undefined,
                undefined,
                functors,
            );
        })();
        const output = visit(INPUT(), meta);

        return ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
                ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    undefined,
                    INPUT(),
                ),
            ],
            undefined,
            undefined,
            variable === null
                ? output
                : ts.factory.createBlock(
                      [
                          ts.factory.createVariableStatement(
                              undefined,
                              ts.factory.createVariableDeclarationList(
                                  [variable],
                                  ts.NodeFlags.Const,
                              ),
                          ),
                          ts.factory.createReturnStatement(output),
                      ],
                      true,
                  ),
        );
    }

    function generate_object(obj: IMetadata.IObject) {
        const binaries: ts.Expression[] = [];
        for (const [key, value] of Object.entries(obj.properties)) {
            const access = ts.factory.createPropertyAccessExpression(
                INPUT(),
                key,
            );
            binaries.push(visit(access, value));
        }

        const output = combine("and")(binaries);
        return ts.factory.createArrowFunction(
            undefined,
            undefined,
            [
                ts.factory.createParameterDeclaration(
                    undefined,
                    undefined,
                    undefined,
                    "input",
                ),
            ],
            undefined,
            undefined,
            output,
        );
    }

    function visit(
        input: ts.Expression,
        meta: IMetadata | null,
    ): ts.Expression {
        if (meta === null || IMetadata.empty(meta)) return TRUE();

        const binaries: ts.Expression[] = [];
        const add = create_add(binaries)(input);
        const constant = (value: number | string | bigint | boolean) =>
            typeof value === "string"
                ? ts.factory.createStringLiteral(value)
                : ts.factory.createIdentifier(value.toString());

        // NULLBLE AND UNDEFINDABLE
        if (meta.nullable === true) add(true, NULL());
        if (meta.required === false) add(true, UNDEFINED());

        // CONSTANT VALUES
        for (const values of meta.constants.values())
            for (const val of values) add(true, constant(val));

        // ATOMIC VALUES
        for (const type of meta.atomics) {
            add(true, TYPEOF(input), ts.factory.createStringLiteral(type));
        }

        // ARRAY OR TUPLE
        if (meta.arraies.size + meta.tuples.size > 0) {
            const inner: ts.Expression[] = [];
            for (const tuple of meta.tuples.values())
                inner.push(visit_tuple(input, tuple));
            for (const array of meta.arraies.values())
                inner.push(visit_array(input, array));

            // ADD
            binaries.push(
                ts.factory.createLogicalAnd(
                    ts.factory.createCallExpression(
                        ts.factory.createIdentifier("Array.isArray"),
                        undefined,
                        [input],
                    ),
                    inner.length === 0
                        ? inner[0]!
                        : inner.reduce((x, y) =>
                              ts.factory.createLogicalOr(x, y),
                          ),
                ),
            );
        }

        // OBJECT
        if (meta.objects.size > 0) {
            const outer: ts.Expression[] = [];
            if (meta.nullable === false)
                create_add(outer)(input)(false, NULL());
            create_add(outer)(input)(
                true,
                TYPEOF(input),
                ts.factory.createStringLiteral("object"),
            );

            const inner: ts.Expression[] = [];
            for (const [obj] of meta.objects.values())
                inner.push(visit_object(input, obj));

            binaries.push(combine("and")([...outer, combine("or")(inner)]));
        }

        // COMBINE CONDITIONS
        return combine("or")(binaries);
    }

    function visit_tuple(
        input: ts.Expression,
        tuple: Array<IMetadata | null>,
    ): ts.Expression {
        const length = ts.factory.createStrictEquality(
            ts.factory.createPropertyAccessExpression(input, "length"),
            ts.factory.createNumericLiteral(tuple.length),
        );
        const binaries: ts.Expression[] = tuple.map((meta, index) =>
            visit(ts.factory.createElementAccessExpression(input, index), meta),
        );
        if (binaries.length === 0) return length;
        else
            return [length, ...binaries].reduce((x, y) =>
                ts.factory.createLogicalAnd(x, y),
            );
    }

    function visit_array(
        input: ts.Expression,
        meta: IMetadata | null,
    ): ts.Expression {
        if (meta === null) return TRUE();
        return ts.factory.createCallExpression(
            ts.factory.createPropertyAccessExpression(input, "every"),
            undefined,
            [
                input,
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [
                        ts.factory.createParameterDeclaration(
                            undefined,
                            undefined,
                            undefined,
                            INPUT("elem"),
                        ),
                    ],
                    undefined,
                    undefined,
                    visit(INPUT("elem"), meta),
                ),
            ],
        );
    }

    function visit_object(input: ts.Expression, { $id }: IMetadata.IObject) {
        return ts.factory.createCallExpression(
            IdentifierFactory.join(
                ts.factory.createIdentifier("functors"),
                $id,
            ),
            undefined,
            [input],
        );
    }
}

const create_add =
    (binaries: ts.Expression[]) =>
    (defaultInput: ts.Expression) =>
    (
        exact: boolean,
        left: ts.Expression,
        right: ts.Expression = defaultInput,
    ) => {
        const factory = exact
            ? ts.factory.createStrictEquality
            : ts.factory.createStrictInequality;
        binaries.push(factory(left, right));
    };

const combine = (type: "and" | "or") => {
    const binder =
        type === "and"
            ? ts.factory.createLogicalAnd
            : ts.factory.createLogicalOr;
    return (expressions: ts.Expression[]) => {
        if (expressions.length === 1) return expressions[0]!;
        return expressions.reduce((x, y) => binder(x, y));
    };
};

const NULL = () => ts.factory.createNull();
const UNDEFINED = () => ts.factory.createIdentifier("undefined");
const TRUE = () => ts.factory.createTrue();
const INPUT = (str: string = "input") => ts.factory.createIdentifier(str);
const TYPEOF = (input: ts.Expression) =>
    ts.factory.createTypeOfExpression(input);
