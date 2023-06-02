import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagBigInt } from "../../structures/TagBigInt";

export const test_equals_TagBigInt = _test_equals(
    "TagBigInt",
    TagBigInt.generate,
    (input) => typia.equals(input),
);
