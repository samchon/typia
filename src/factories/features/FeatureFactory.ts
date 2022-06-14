import ts from "typescript";
import { IMetadata } from "../../structures/IMetadata";
import { IdentifierFactory } from "../programmatics/IdentifierFactory";
import { MetadataCollection } from "../MetadataCollection";
import { ValueFactory } from "../ValueFactory";

export namespace FeatureFactory {
    export interface IOptions<T> {
        path: boolean;
        data: T;
    }

    export function generate<T>(
        visitor: (
            input: ts.Expression,
            meta: IMetadata,
            options: IOptions<T>,
        ) => ts.Expression,
        combiner: (binaries: ts.Expression[]) => ts.Expression,
        options: IOptions<T>,
    ) {
        const objector = generate_object(visitor, combiner, options);
        return function (collection: MetadataCollection, meta: IMetadata) {
            const variable = (() => {
                const storage = collection.storage();
                if (Object.entries(storage).length === 0) return null;

                const functors = ts.factory.createObjectLiteralExpression(
                    Object.entries(collection.storage()).map(([key, value]) =>
                        ts.factory.createPropertyAssignment(
                            IdentifierFactory.generate(key),
                            objector(value),
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
            const output = visitor(ValueFactory.INPUT(), meta, options);

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(options.path),
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
        };
    }

    function generate_object<T>(
        visitor: (
            input: ts.Expression,
            meta: IMetadata,
            options: IOptions<T>,
        ) => ts.Expression,
        combiner: (binaries: ts.Expression[]) => ts.Expression,
        options: IOptions<T>,
    ) {
        return function (obj: IMetadata.IObject) {
            const binaries: ts.Expression[] = [];
            for (const [key, value] of Object.entries(obj.properties)) {
                const access = ts.factory.createPropertyAccessExpression(
                    ValueFactory.INPUT(),
                    key,
                );
                binaries.push(visitor(access, value, options));
            }

            const output = combiner(binaries);

            return ts.factory.createArrowFunction(
                undefined,
                undefined,
                PARAMETERS(options.path),
                undefined,
                undefined,
                output,
            );
        };
    }
}

const PARAMETERS = (path: boolean) => {
    const output = [
        ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            undefined,
            ValueFactory.INPUT(),
        ),
    ];
    if (path === true)
        output.push(
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                "path",
                undefined,
                undefined,
                ts.factory.createStringLiteral("$input"),
            ),
        );
    return output;
};
