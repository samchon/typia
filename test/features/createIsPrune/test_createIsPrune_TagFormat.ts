import typia from "../../../src";

import { TagFormat } from "../../structures/TagFormat";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TagFormat = _test_isPrune(
    "TagFormat",
    TagFormat.generate,
    typia.createIsPrune<TagFormat>(),
    TagFormat.SPOILERS,
);
