import typia from "../../../src";
import { TagBigInt } from "../../structures/TagBigInt";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagBigInt = _test_equals(
    "TagBigInt",
    TagBigInt.generate,
    typia.createEquals<TagBigInt>(),
);