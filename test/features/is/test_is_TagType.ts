import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_is } from "../internal/_test_is";

export const test_is_TagType = _test_is(
    "TagType",
    TagType.generate,
    (input) => typia.is(input),
    TagType.SPOILERS,
);