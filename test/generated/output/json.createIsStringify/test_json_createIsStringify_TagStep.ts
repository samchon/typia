import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagStep } from "../../../structures/TagStep";

export const test_json_isStringify_TagStep = _test_json_isStringify(
    "TagStep",
    TagStep.generate,
    (input: TagStep): string | null => {
        const is = (input: any): input is TagStep => {
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
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const stringify = (input: TagStep): string => {
            const $number = (typia.json.createIsStringify as any).number;
            return `[${input
                .map(
                    (elem: any) =>
                        `{"exclusiveMinimum":${$number(
                            (elem as any).exclusiveMinimum,
                        )},"minimum":${$number(
                            (elem as any).minimum,
                        )},"range":${$number(
                            (elem as any).range,
                        )},"multipleOf":${$number((elem as any).multipleOf)}}`,
                )
                .join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    TagStep.SPOILERS,
);
