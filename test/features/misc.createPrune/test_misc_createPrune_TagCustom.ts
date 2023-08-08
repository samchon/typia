import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TagCustom } from "../../structures/TagCustom";

export const test_misc_prune_TagCustom = _test_misc_prune(
    "TagCustom",
    TagCustom.generate,
    typia.misc.createPrune<TagCustom>(),
);
