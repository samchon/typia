import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagStep } from "../../../structures/TagStep";

export const test_json_isStringify_TagStep = _test_json_isStringify(
    "TagStep",
)<TagStep>(TagStep)((input) =>
    ((input: TagStep): string | null => {
        const is = (input: any): input is TagStep => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
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
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: TagStep): string => {
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
            const $number = (typia.json.isStringify as any).number;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map(
                        (elem: any) =>
                            `{"exclusiveMinimum":${$number(
                                (elem as any).exclusiveMinimum,
                            )},"minimum":${$number(
                                (elem as any).minimum,
                            )},"range":${$number(
                                (elem as any).range,
                            )},"multipleOf":${$number(
                                (elem as any).multipleOf,
                            )}}`,
                    )
                    .join(",")}]`}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
