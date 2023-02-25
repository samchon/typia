import typia from "../../../src";

import { TagLength } from "../../structures/TagLength";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagLength = _test_isPrune(
    "TagLength",
    TagLength.generate,
    typia.createIsPrune<TagLength>(),
    TagLength.SPOILERS,
);
