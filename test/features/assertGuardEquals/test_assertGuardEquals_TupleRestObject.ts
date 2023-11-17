import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertGuardEquals_TupleRestObject = _test_assertGuardEquals(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.assertGuardEquals<TupleRestObject>(input),
);
