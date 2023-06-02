import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_TagCustom = _test_assertClone(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertClone<TagCustom>(),
    TagCustom.SPOILERS,
);
