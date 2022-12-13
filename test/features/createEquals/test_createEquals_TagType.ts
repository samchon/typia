import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagType = _test_equals(
    "TagType",
    TagType.generate,
    typia.createEquals<TagType>(),
);