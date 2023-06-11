import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_TagCustom = _test_equals(
    "TagCustom",
    TagCustom.generate,
    typia.createEquals<TagCustom>(),
);
