import ts from "typescript";

import { Metadata } from "../../schemas/metadata/Metadata";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { template_to_pattern } from "./template_to_pattern";

/**
 * @internal
 */
export const check_template =
    (templates: Metadata[][]) =>
    (input: ts.Expression): ICheckEntry => {
        // TYPEOF STRING & TAGS
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // TEMPLATES
        const internal: ts.Expression[] = templates.map((tpl) =>
            ts.factory.createCallExpression(
                ts.factory.createIdentifier(
                    `RegExp(/${template_to_pattern(true)(tpl)}/).test`,
                ),
                undefined,
                [input],
            ),
        );
        conditions.push(
            internal.length === 1
                ? internal[0]!
                : internal.reduce((x, y) => ts.factory.createLogicalOr(x, y)),
        );

        // COMBINATION
        return {
            expression: conditions.reduce((x, y) =>
                ts.factory.createLogicalAnd(x, y),
            ),
            conditions: [],
            expected: templates
                .map(
                    (tpl) =>
                        "`" +
                        tpl
                            .map((child) =>
                                child.isConstant() && child.size() === 1
                                    ? child.constants[0]!.values[0]!
                                    : `$\{${child.getName()}\}`,
                            )
                            .join("")
                            .split("`")
                            .join("\\`") +
                        "`",
                )
                .join(" | "),
        };
    };
