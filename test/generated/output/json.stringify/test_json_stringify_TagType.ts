import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagType } from "../../../structures/TagType";

export const test_json_stringify_TagType = _test_json_stringify<TagType>(
    TagType,
)((input) =>
    ((input: TagType): string => {
        const $io1 = (input: any): boolean =>
            "number" === typeof input.int &&
            parseInt(input.int) === input.int &&
            "number" === typeof input.uint &&
            parseInt(input.uint) === input.uint &&
            0 <= input.uint;
        const $number = (typia.json.stringify as any).number;
        const $so0 = (input: any): any =>
            `{"value":${`[${input.value
                .map(
                    (elem: any) =>
                        `{"int":${$number((elem as any).int)},"uint":${$number(
                            (elem as any).uint,
                        )}}`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    })(input),
);
