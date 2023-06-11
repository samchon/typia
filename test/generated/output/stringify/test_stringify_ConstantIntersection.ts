import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_stringify_ConstantIntersection = _test_stringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) =>
        ((
            input: [
                ConstantIntersection.Wrapper<false>,
                ConstantIntersection.Wrapper<1>,
                ConstantIntersection.Wrapper<"two">,
            ],
        ): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            const $throws = (typia.stringify as any).throws;
            return `[${input[0]},${$number(input[1])},${(() => {
                if ("string" === typeof input[2]) return $string(input[2]);
                if ("string" === typeof input[2]) return '"' + input[2] + '"';
                $throws({
                    expected: '"two"',
                    value: input[2],
                });
            })()}]`;
        })(input),
);
