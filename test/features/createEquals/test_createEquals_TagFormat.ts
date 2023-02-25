import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagFormat = _test_equals(
    "TagFormat",
    TagFormat.generate,
    typia.createEquals<TagFormat>(),
);
