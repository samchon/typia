import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagLength } from "../../../structures/TagLength";

export const test_json_isStringify_TagLength = _test_json_isStringify(
    "TagLength",
)<TagLength>(TagLength)((input) =>
    ((input: TagLength): string | null => {
        const is = (input: any): input is TagLength => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
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
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: TagLength): string => {
            const $io1 = (input: any): boolean =>
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
            const $string = (typia.json.isStringify as any).string;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
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
                    .join(",")}]`}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
