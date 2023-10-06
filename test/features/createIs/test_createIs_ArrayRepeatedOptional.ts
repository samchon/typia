import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createIs_ArrayRepeatedOptional = _test_is(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(
    ArrayRepeatedOptional
)(typia.createIs<ArrayRepeatedOptional>());
