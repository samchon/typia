import typia from "../../../../src";
import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TagStep } from "../../../structures/TagStep";

export const test_misc_prune_TagStep = _test_misc_prune("TagStep")<TagStep>(
    TagStep,
)((input: TagStep): void => {
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
});
