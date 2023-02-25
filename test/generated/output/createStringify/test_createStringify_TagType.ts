import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TagType = _test_stringify("TagType", TagType.generate, (input: TagType): string => {
    return `[${input.map((elem: any) => `{"int":${elem.int},"uint":${elem.uint}}`).join(",")}]`;
});
