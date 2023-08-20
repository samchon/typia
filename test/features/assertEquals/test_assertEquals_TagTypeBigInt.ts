import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_assertEquals_TagTypeBigInt = _test_assertEquals(
    "TagTypeBigInt",
    TagTypeBigInt.generate,
    (input) => typia.assertEquals<TagTypeBigInt>(input),
);
