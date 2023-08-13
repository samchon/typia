import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagLength } from "../../../structures/TagLength";

export const test_createStringify_TagLength = _test_stringify(
    "TagLength",
    TagLength.generate,
    (input: TagLength): string => {
        const $string = (typia.createStringify as any).string;
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
    },
);
