import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagRangeBigInt } from "../../structures/TagRangeBigInt";

export const test_is_TagRangeBigInt = _test_is(
    "TagRangeBigInt",
    TagRangeBigInt.generate,
    (input) => typia.is<TagRangeBigInt>(input),
    TagRangeBigInt.SPOILERS,
);
