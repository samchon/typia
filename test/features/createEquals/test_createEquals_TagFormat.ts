import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagFormat } from "../../structures/TagFormat";

export const test_createEquals_TagFormat = _test_equals(
    "TagFormat",
    TagFormat.generate,
    typia.createEquals<TagFormat>(),
);
