import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_isPrune_TagBigInt = _test_isPrune(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.isPrune(input),
    TagBigInt.SPOILERS,
);
