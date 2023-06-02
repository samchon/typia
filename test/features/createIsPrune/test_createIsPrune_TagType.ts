import typia from "../../../src";

import { TagType } from "../../structures/TagType";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_TagType = _test_isPrune(
    "TagType",
    TagType.generate,
    typia.createIsPrune<TagType>(),
    TagType.SPOILERS,
);
