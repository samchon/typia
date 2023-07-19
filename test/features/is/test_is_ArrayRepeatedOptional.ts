import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_is_ArrayRepeatedOptional = _test_is<ArrayRepeatedOptional>(
    ArrayRepeatedOptional,
)((input) => typia.is(input));
