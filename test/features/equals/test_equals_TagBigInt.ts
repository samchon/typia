import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TagBigInt = _test_equals(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.equals(input),
);