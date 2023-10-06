import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_validateClone_ArrayUnion = _test_misc_validateClone(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((input) => typia.misc.validateClone<ArrayUnion>(input));
