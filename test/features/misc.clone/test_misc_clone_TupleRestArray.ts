import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_clone_TupleRestArray = _test_misc_clone<TupleRestArray>(
    TupleRestArray,
)((input) => typia.misc.clone<TupleRestArray>(input));
