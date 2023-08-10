import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagType } from "../../../structures/TagType";

export const test_json_isStringify_TagType = _test_json_isStringify<TagType>(
    TagType,
)((input) =>
    ((input: IPointer<Array<TagType.Type>>): string | null => {
        const is = (input: any): input is IPointer<Array<TagType.Type>> => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                parseInt(input.int) === input.int &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: IPointer<Array<TagType.Type>>): string => {
            const $io1 = (input: any): boolean =>
                "number" === typeof input.int &&
                parseInt(input.int) === input.int &&
                "number" === typeof input.uint &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
            const $number = (typia.json.isStringify as any).number;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map(
                        (elem: any) =>
                            `{"int":${$number(
                                (elem as any).int,
                            )},"uint":${$number((elem as any).uint)}}`,
                    )
                    .join(",")}]`}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    })(input),
);
