import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TagBigInt = _test_isPrune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.isPrune(input),
    TagBigInt.SPOILERS,
);
