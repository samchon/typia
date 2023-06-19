import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_stringify_DynamicConstant = _test_stringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) =>
        ((input: { a: number; b: number; c: number; d: number }): string => {
            const $number = (typia.stringify as any).number;
            return `{"a":${$number((input as any).a)},"b":${$number(
                (input as any).b,
            )},"c":${$number((input as any).c)},"d":${$number(
                (input as any).d,
            )}}`;
        })(input),
);
