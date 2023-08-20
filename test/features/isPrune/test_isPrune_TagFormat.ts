import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_isPrune_TagFormat = _test_isPrune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.isPrune<TagFormat>(input),
    TagFormat.SPOILERS,
);
