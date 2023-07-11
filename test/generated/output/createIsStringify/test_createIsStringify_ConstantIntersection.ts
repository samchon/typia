import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_createIsStringify_ConstantIntersection = _test_isStringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input: ConstantIntersection): string | null => {
        const is = (input: any): input is ConstantIntersection => {
            return (
                Array.isArray(input) &&
                input.length === 3 &&
                false === input[0] &&
                1 === input[1] &&
                "two" === input[2]
            );
        };
        const stringify = (input: ConstantIntersection): string => {
            const $number = (typia.createIsStringify as any).number;
            const $string = (typia.createIsStringify as any).string;
            const $throws = (typia.createIsStringify as any).throws;
            return `[${input[0]},${$number(input[1])},${(() => {
                if ("string" === typeof input[2]) return $string(input[2]);
                if ("string" === typeof input[2]) return '"' + input[2] + '"';
                $throws({
                    expected: '"two"',
                    value: input[2],
                });
            })()}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    ConstantIntersection.SPOILERS,
);
