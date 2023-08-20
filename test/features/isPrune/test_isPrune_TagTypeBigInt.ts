import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_isPrune_TagTypeBigInt = _test_isPrune(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) => typia.isPrune<TagTypeBigInt>(input),
    TagTypeBigInt.SPOILERS,
);
