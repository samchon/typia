import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertGuard_TupleRestObject = _test_assertGuard(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  typia.assertGuard<TupleRestObject>(input),
);
