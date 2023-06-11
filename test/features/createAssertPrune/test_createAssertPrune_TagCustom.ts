import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_assertPrune } from "../../internal/_test_assertPrune";

export const test_createAssertPrune_TagCustom = _test_assertPrune(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertPrune<TagCustom>(),
    TagCustom.SPOILERS,
);
