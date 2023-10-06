import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createClone_TypeTagTuple = _test_misc_clone(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.misc.createClone<TypeTagTuple>());
