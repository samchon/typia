import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_clone_TupleRestArray = (): void => _test_misc_clone(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.misc.clone<TupleRestArray>(input));
