import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_isClone_TupleRestArray = _test_misc_isClone(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.misc.isClone<TupleRestArray>(input));
