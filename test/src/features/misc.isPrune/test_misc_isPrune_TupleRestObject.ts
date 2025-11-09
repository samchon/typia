import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_isPrune_TupleRestObject = (): void => _test_misc_isPrune(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.misc.isPrune<TupleRestObject>(input));
