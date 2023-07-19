import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagType } from "../../../structures/TagType";

export const test_json_isStringify_TagType = _test_json_isStringify<TagType>(
    TagType,
)((input: TagType): string | null => {
    const is = (input: any): input is TagType => {
        const $io0 = (input: any): boolean =>
            "number" === typeof input.int &&
            Number.isFinite(input.int) &&
            parseInt(input.int) === input.int &&
            "number" === typeof input.uint &&
            Number.isFinite(input.uint) &&
            parseInt(input.uint) === input.uint &&
            0 <= input.uint;
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
    };
    const stringify = (input: TagType): string => {
        const $number = (typia.json.createIsStringify as any).number;
        return `[${input
            .map(
                (elem: any) =>
                    `{"int":${$number((elem as any).int)},"uint":${$number(
                        (elem as any).uint,
                    )}}`,
            )
            .join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
});
