import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_createAssertEquals_TagRangeBigInt = _test_assertEquals(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    typia.createAssertEquals<TagRangeBigInt>(),
);
