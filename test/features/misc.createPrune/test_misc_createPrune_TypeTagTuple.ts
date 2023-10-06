import typia from "../../../src";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_createPrune_TypeTagTuple = _test_misc_prune(
    "TypeTagTuple",
)<TypeTagTuple>(
    TypeTagTuple
)(typia.misc.createPrune<TypeTagTuple>());
