import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagStep } from "../../../structures/TagStep";

export const test_createEquals_TagStep = _test_equals(
    "TagStep",
    TagStep.generate,
    (input: any, _exceptionable: boolean = true): input is TagStep => {
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            "number" === typeof input.exclusiveMinimum &&
            0 === (input.exclusiveMinimum % 5) - 3 &&
            3 < input.exclusiveMinimum &&
            "number" === typeof input.minimum &&
            0 === (input.minimum % 5) - 3 &&
            3 <= input.minimum &&
            "number" === typeof input.range &&
            0 === (input.range % 5) - 0 &&
            0 < input.range &&
            100 > input.range &&
            "number" === typeof input.multipleOf &&
            0 === input.multipleOf % 5 &&
            3 <= input.multipleOf &&
            99 >= input.multipleOf &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        [
                            "exclusiveMinimum",
                            "minimum",
                            "range",
                            "multipleOf",
                        ].some((prop: any) => key === prop)
                    )
                        return true;
                    const value: any = input[key];
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
    },
);
