import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagLength } from "../../../structures/TagLength";

export const test_json_stringify_TagLength = _test_json_stringify<TagLength>(
    TagLength,
)((input) =>
    ((input: IPointer<Array<TagLength.Type>>): string => {
        const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 === input.fixed.length &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            7 >= input.maximum.length &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            7 >= input.minimum_and_maximum.length;
        const $string = (typia.json.stringify as any).string;
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
                        )}}`,
                )
                .join(",")}]`}}`;
        return $so0(input);
    })(input),
);
