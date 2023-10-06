import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createValidateClone_TypeTagTuple = _test_misc_validateClone(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.misc.createValidateClone<TypeTagTuple>());
