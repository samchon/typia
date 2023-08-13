import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagLength } from "../../../structures/TagLength";

export const test_createIsStringify_TagLength = _test_isStringify(
    "TagLength",
    TagLength.generate,
    (input: TagLength): string | null => {
        const is = (input: any): input is TagLength => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.fixed &&
                5 === input.fixed.length &&
                "string" === typeof input.minimum &&
                3 <= input.minimum.length &&
                "string" === typeof input.maximum &&
                7 >= input.maximum.length &&
                "string" === typeof input.minimum_and_maximum &&
                3 <= input.minimum_and_maximum.length &&
                7 >= input.minimum_and_maximum.length &&
                "string" === typeof input.equal &&
                10 <= input.equal.length &&
                19 >= input.equal.length;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const stringify = (input: TagLength): string => {
            const $string = (typia.createIsStringify as any).string;
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
                        )},"equal":${$string((elem as any).equal)}}`,
                )
                .join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    TagLength.SPOILERS,
);
