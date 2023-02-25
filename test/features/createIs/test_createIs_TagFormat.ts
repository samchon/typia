import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TagFormat = _test_is(
    "TagFormat",
    TagFormat.generate,
    typia.createIs<TagFormat>(),
    TagFormat.SPOILERS,
);
