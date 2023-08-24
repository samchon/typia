import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagStep } from "../../../structures/TagStep";

export const test_misc_isPrune_TagStep = _test_misc_isPrune("TagStep")<TagStep>(
    TagStep,
)((input: any): input is TagStep => {
    const is = (input: any): input is TagStep => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "number" === typeof input.exclusiveMinimum &&
            Number.isFinite(input.exclusiveMinimum) &&
            0 === (input.exclusiveMinimum % 5) - 3 &&
            3 < input.exclusiveMinimum &&
            "number" === typeof input.minimum &&
            Number.isFinite(input.minimum) &&
            0 === (input.minimum % 5) - 3 &&
            3 <= input.minimum &&
            "number" === typeof input.range &&
            Number.isFinite(input.range) &&
            0 === (input.range % 5) - 0 &&
            0 < input.range &&
            100 > input.range &&
            "number" === typeof input.multipleOf &&
            Number.isFinite(input.multipleOf) &&
            0 === input.multipleOf % 5 &&
            3 <= input.multipleOf &&
            99 >= input.multipleOf;
        return "object" === typeof input && null !== input && $io0(input);
    };
    const prune = (input: TagStep): void => {
        const $io1 = (input: any): boolean =>
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
            99 >= input.multipleOf;
        const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem) $po1(elem);
            });
        const $po0 = (input: any): any => {
            if (Array.isArray(input.value)) $pp0(input.value);
            for (const key of Object.keys(input)) {
                if ("value" === key) continue;
                delete input[key];
            }
        };
        const $po1 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "exclusiveMinimum" === key ||
                    "minimum" === key ||
                    "range" === key ||
                    "multipleOf" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
