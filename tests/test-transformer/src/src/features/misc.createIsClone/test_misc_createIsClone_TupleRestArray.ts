import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_createIsClone_TupleRestArray = (): void => _test_misc_isClone(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.misc.createIsClone<TupleRestArray>());
