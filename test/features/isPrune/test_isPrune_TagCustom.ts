import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TagCustom = _test_isPrune(
    "TagCustom",
    TagCustom.generate,
    (input) => typia.isPrune(input),
    TagCustom.SPOILERS,
);
