import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertGuardEquals_TupleRestArray = _test_assertGuardEquals(
    "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
    typia.assertGuardEquals<TupleRestArray>(input),
);
