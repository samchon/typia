import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagCustom } from "../../structures/TagCustom";

export const test_createIsPrune_TagCustom = _test_isPrune(
    "TagCustom",
    TagCustom.generate,
    typia.createIsPrune<TagCustom>(),
    TagCustom.SPOILERS,
);
