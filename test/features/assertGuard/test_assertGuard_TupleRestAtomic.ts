import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_assertGuard_TupleRestAtomic = _test_assertGuard(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  typia.assertGuard<TupleRestAtomic>(input),
);
