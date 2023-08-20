import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_createEquals_TagTypeBigInt = _test_equals(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    typia.createEquals<TagTypeBigInt>(),
);
