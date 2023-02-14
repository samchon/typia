import ts from "typescript";

import { IMetadataTag } from "../../metadata/IMetadataTag";

export function check_bigint(input: ts.Expression, tagList: IMetadataTag[]) {
    const caster = (value: number) =>
        ts.factory.createIdentifier(`${Math.floor(value)}n`);

    // TYPEOF STATEMENT
    const conditions: ts.Expression[] = [
        ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("bigint"),
            ts.factory.createTypeOfExpression(input),
        ),
    ];

    // TAG (RANGE)
    for (const tag of tagList)
        if (tag.kind === "multipleOf")
            conditions.push(
                ts.factory.createStrictEquality(
                    caster(0),
                    ts.factory.createModulo(input, caster(tag.value)),
                ),
            );
        else if (tag.kind === "step") {
            const modulo = () =>
                ts.factory.createModulo(input, caster(tag.value));
            const minimum = (() => {
                for (const tag of tagList)
                    if (tag.kind === "minimum") return tag.value;
                    else if (tag.kind === "exclusiveMinimum") return tag.value;
                return undefined;
            })();
            conditions.push(
                ts.factory.createStrictEquality(
                    caster(0),
                    minimum !== undefined
                        ? ts.factory.createSubtract(modulo(), caster(minimum))
                        : modulo(),
                ),
            );
        } else if (tag.kind === "minimum")
            conditions.push(
                ts.factory.createLessThanEquals(caster(tag.value), input),
            );
        else if (tag.kind === "maximum")
            conditions.push(
                ts.factory.createGreaterThanEquals(caster(tag.value), input),
            );
        else if (tag.kind === "exclusiveMinimum")
            conditions.push(
                ts.factory.createLessThan(caster(tag.value), input),
            );
        else if (tag.kind === "exclusiveMaximum")
            conditions.push(
                ts.factory.createGreaterThan(caster(tag.value), input),
            );

    // COMBINATION
    return conditions.length === 1
        ? conditions[0]!
        : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
}
