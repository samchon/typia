import ts from "typescript";
import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";
// import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";
import { IPointer } from "../../structures/IPointer";
import { FeatureProgrammer } from "../FeatureProgrammer";
import { IsProgrammer } from "../IsProgrammer";
import { UnionPredicator } from "./UnionPredicator";

export namespace UnionExplorer {
    export interface Decoder<T> {
        (
            input: ts.Expression,
            target: T,
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression;
    }
    export type Combiner<T> = Decoder<T[]>;

    export function object(
        config: FeatureProgrammer.IConfig,
        decoder: Decoder<MetadataObject>,
        combiner: Combiner<MetadataObject>,
        failure: (input: ts.Expression) => ts.Statement,
    ) {
        return function (
            input: ts.Expression,
            targets: MetadataObject[],
            explore: FeatureProgrammer.IExplore,
        ): ts.Expression {
            // BREAKER
            if (targets.length === 1)
                return decoder(input, targets[0]!, explore);

            // POSSIBLE TO SPECIALIZE?
            const specList = UnionPredicator.object(targets);
            if (specList.length === 0)
                return combiner(input, targets, {
                    ...explore,
                    tracable: false,
                });
            const remained: MetadataObject[] = targets.filter(
                (t) => specList.find((s) => s.object === t) === undefined,
            );

            // DO SPECIALIZE
            const condition: IPointer<ts.IfStatement | null> = { value: null };

            specList.reverse().forEach((spec) => {
                const accessor: ts.Expression = IdentifierFactory.join(
                    input,
                    spec.property.name,
                );
                const pred: ts.Expression = spec.neighbour
                    ? IsProgrammer.decode()(accessor, spec.property.metadata, {
                          tracable: true,
                          source: "object",
                          from: "object",
                          postfix: IdentifierFactory.postfix(
                              spec.property.name,
                          ),
                      })
                    : ExpressionFactory.isRequired(accessor);
                const statement: ts.IfStatement = ts.factory.createIfStatement(
                    pred,
                    ts.factory.createReturnStatement(
                        decoder(input, spec.object, explore),
                    ),
                    condition.value ? condition.value : undefined,
                );
                condition.value = statement;
            });

            // RETURNS WITH CONDITIONS
            return ts.factory.createCallExpression(
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    undefined,
                    ts.factory.createBlock(
                        [
                            condition.value!,
                            remained.length
                                ? ts.factory.createReturnStatement(
                                      object(
                                          config,
                                          decoder,
                                          combiner,
                                          failure,
                                      )(input, remained, explore),
                                  )
                                : failure(input),
                        ],
                        true,
                    ),
                ),
                undefined,
                undefined,
            );
        };
    }

    // export function array(
    //     config: FeatureProgrammer.IConfig,
    //     decoder: Decoder<Metadata>,
    //     combiner: Combiner<Metadata>,
    //     empty: () => ts.Expression,
    //     failure: (input: ts.Expression) => ts.Statement,
    // ) {
    //     return function (
    //         input: ts.Expression,
    //         targets: Metadata[],
    //         explore: FeatureProgrammer.IExplore,
    //     ): ts.Expression {
    //         if (targets.length === 1)
    //             return decoder(input, targets[0]!, explore);

    //         return ts.factory.createCallExpression(
    //             ts.factory.createArrowFunction(

    //             )
    //         )
    //     };
    // }
}
