import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagRange } from "../../../structures/TagRange";

export const test_json_stringify_TagRange = _test_json_stringify<TagRange>(
    TagRange,
)((input) =>
    ((input: IPointer<Array<TagRange.Type>>): string => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.greater &&
            3 < input.greater &&
            "number" === typeof input.greater_equal &&
            3 <= input.greater_equal &&
            "number" === typeof input.less &&
            7 > input.less &&
            "number" === typeof input.less_equal &&
            7 >= input.less_equal &&
            "number" === typeof input.greater_less &&
            3 < input.greater_less &&
            7 > input.greater_less &&
            "number" === typeof input.greater_equal_less &&
            3 <= input.greater_equal_less &&
            7 > input.greater_equal_less &&
            "number" === typeof input.greater_less_equal &&
            3 < input.greater_less_equal &&
            7 >= input.greater_less_equal &&
            "number" === typeof input.greater_equal_less_equal &&
            3 <= input.greater_equal_less_equal &&
            7 >= input.greater_equal_less_equal;
        const $number = (typia.json.stringify as any).number;
        const $so0 = (input: any): any =>
            `{"value":${`[${input.value
                .map(
                    (elem: any) =>
                        `{"greater":${$number(
                            (elem as any).greater,
                        )},"greater_equal":${$number(
                            (elem as any).greater_equal,
                        )},"less":${$number(
                            (elem as any).less,
                        )},"less_equal":${$number(
                            (elem as any).less_equal,
                        )},"greater_less":${$number(
                            (elem as any).greater_less,
                        )},"greater_equal_less":${$number(
                            (elem as any).greater_equal_less,
                        )},"greater_less_equal":${$number(
                            (elem as any).greater_less_equal,
                        )},"greater_equal_less_equal":${$number(
                            (elem as any).greater_equal_less_equal,
                        )}}`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    })(input),
);
