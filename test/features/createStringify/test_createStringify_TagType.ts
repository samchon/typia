import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagType } from "../../structures/TagType";

export const test_createStringify_TagType = _test_stringify(
    "TagType",
    TagType.generate,
    typia.createStringify<TagType>(),
);
