import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertGuard_TupleRestArray = _test_assertGuard(
    "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
    typia.assertGuard<TupleRestArray>(input),
);
