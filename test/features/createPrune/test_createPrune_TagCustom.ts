import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_TagCustom = _test_prune(
    "TagCustom",
    TagCustom.generate,
    typia.createPrune<TagCustom>(),
);
