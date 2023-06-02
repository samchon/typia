import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagRange } from "../../../structures/TagRange";

export const test_stringify_TagRange = _test_stringify(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((input: Array<TagRange.Type>): string => {
            const $number: any = (typia.stringify as any).number;
            const $so0: any = (input: any): any =>
                `{"greater":${$number(input.greater)},"greater_equal":${$number(
                    input.greater_equal,
                )},"less":${$number(input.less)},"less_equal":${$number(
                    input.less_equal,
                )},"greater_less":${$number(
                    input.greater_less,
                )},"greater_equal_less":${$number(
                    input.greater_equal_less,
                )},"greater_less_equal":${$number(
                    input.greater_less_equal,
                )},"greater_equal_less_equal":${$number(
                    input.greater_equal_less_equal,
                )}}`;
            return (() =>
                `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
        })(input),
);
