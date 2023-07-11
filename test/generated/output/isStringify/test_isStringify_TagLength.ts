import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagLength } from "../../../structures/TagLength";

export const test_isStringify_TagLength = _test_isStringify(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: Array<TagLength.Type>): string | null => {
            const is = (input: any): input is Array<TagLength.Type> => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.fixed &&
                    5 === input.fixed.length &&
                    "string" === typeof input.minimum &&
                    3 <= input.minimum.length &&
                    "string" === typeof input.maximum &&
                    7 >= input.maximum.length &&
                    "string" === typeof input.minimum_and_maximum &&
                    3 <= input.minimum_and_maximum.length &&
                    7 >= input.minimum_and_maximum.length;
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
            const stringify = (input: Array<TagLength.Type>): string => {
                const $string = (typia.isStringify as any).string;
                return `[${input
                    .map(
                        (elem: any) =>
                            `{"fixed":${$string(
                                (elem as any).fixed,
                            )},"minimum":${$string(
                                (elem as any).minimum,
                            )},"maximum":${$string(
                                (elem as any).maximum,
                            )},"minimum_and_maximum":${$string(
                                (elem as any).minimum_and_maximum,
                            )}}`,
                    )
                    .join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    TagLength.SPOILERS,
);
