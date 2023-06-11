import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagType } from "../../../structures/TagType";

export const test_createStringify_TagType = _test_stringify(
    "TagType",
    TagType.generate,
    (input: TagType): string => {
        const $number = (typia.createStringify as any).number;
        return `[${input
            .map(
                (elem: any) =>
                    `{"int":${$number((elem as any).int)},"uint":${$number(
                        (elem as any).uint,
                    )}}`,
            )
            .join(",")}]`;
    },
);
