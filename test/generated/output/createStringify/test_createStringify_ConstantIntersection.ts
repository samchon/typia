import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_createStringify_ConstantIntersection = _test_stringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input: ConstantIntersection): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        const $throws = (typia.createStringify as any).throws;
        return `[${input[0]},${$number(input[1])},${(() => {
            if ("string" === typeof input[2]) return $string(input[2]);
            if ("string" === typeof input[2]) return '"' + input[2] + '"';
            $throws({
                expected: '"two"',
                value: input[2],
            });
        })()}]`;
    },
);
