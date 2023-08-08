import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagLength } from "../../../structures/TagLength";

export const test_json_stringify_TagLength = _test_json_stringify(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: Array<TagLength.Type>): string => {
            const $string = (typia.json.stringify as any).string;
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
        })(input),
);
