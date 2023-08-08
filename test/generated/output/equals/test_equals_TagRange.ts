import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagRange } from "../../../structures/TagRange";

export const test_equals_TagRange = _test_equals(
    "TagRange",
    TagRange.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is Array<TagRange.Type> => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.greater &&
                Number.isFinite(input.greater) &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Number.isFinite(input.greater_equal) &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Number.isFinite(input.less) &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Number.isFinite(input.less_equal) &&
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
                7 >= input.greater_equal_less_equal &&
                (8 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            [
                                "greater",
                                "greater_equal",
                                "less",
                                "less_equal",
                                "greater_less",
                                "greater_equal_less",
                                "greater_less_equal",
                                "greater_equal_less_equal",
                            ].some((prop: any) => key === prop)
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $io0(elem, true),
                )
            );
        })(input),
);
