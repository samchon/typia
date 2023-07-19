import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { TagStep } from "../../../structures/TagStep";

export const test_misc_isPrune_TagStep = _test_misc_isPrune<TagStep>(TagStep)(
    (input) =>
        ((input: any): input is Array<TagStep.Type> => {
            const is = (input: any): input is Array<TagStep.Type> => {
                const $io0 = (input: any): boolean =>
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
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const prune = (input: Array<TagStep.Type>): void => {
                const $pp0 = (input: any) =>
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
                const $po0 = (input: any): any => {
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
                if (Array.isArray(input)) $pp0(input);
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
);
