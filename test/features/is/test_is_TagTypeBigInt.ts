import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagTypeBigInt } from "../../structures/TagTypeBigInt";

export const test_is_TagTypeBigInt = _test_is("TagTypeBigInt")<TagTypeBigInt>(
    TagTypeBigInt,
)((input) => typia.is<TagTypeBigInt>(input));
