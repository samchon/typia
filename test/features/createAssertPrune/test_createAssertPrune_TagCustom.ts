import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagCustom } from "../../structures/TagCustom";

export const test_createAssertPrune_TagCustom = _test_assertPrune(
    "TagCustom",
    TagCustom.generate,
    typia.createAssertPrune<TagCustom>(),
    TagCustom.SPOILERS,
);
