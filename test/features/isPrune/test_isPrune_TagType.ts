import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagType } from "../../structures/TagType";

export const test_isPrune_TagType = _test_isPrune(
    "TagType",
    TagType.generate,
    (input) => typia.isPrune(input),
    TagType.SPOILERS,
);
