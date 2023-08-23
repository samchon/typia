import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TagStep } from "../../../structures/TagStep";

export const test_misc_clone_TagStep = _test_misc_clone("TagStep")<TagStep>(
    TagStep,
)((input) =>
    ((input: TagStep): typia.Resolved<TagStep> => {
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
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co1(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
                ? $cp0(input.value)
                : (input.value as any),
        });
        const $co1 = (input: any): any => ({
            exclusiveMinimum: input.exclusiveMinimum as any,
            minimum: input.minimum as any,
            range: input.range as any,
            multipleOf: input.multipleOf as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
