import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagStep } from "../../../structures/TagStep";

export const test_createIsStringify_TagStep = _test_isStringify(
    "TagStep",
    TagStep.generate,
    (input: TagStep): string | null => {
        const is: any = (input: any): input is TagStep => {
            const $io0: any = (input: any): boolean =>
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
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const stringify: any = (input: TagStep): string => {
            const $number: any = (typia.createIsStringify as any).number;
            const $so0: any = (input: any): any =>
                `{"exclusiveMinimum":${$number(
                    input.exclusiveMinimum,
                )},"minimum":${$number(input.minimum)},"range":${$number(
                    input.range,
                )},"multipleOf":${$number(input.multipleOf)}}`;
            return (() =>
                `[${input.map((elem: any) => $so0(elem)).join(",")}]`)();
        };
        return is(input) ? stringify(input) : null;
    },
    TagStep.SPOILERS,
);
