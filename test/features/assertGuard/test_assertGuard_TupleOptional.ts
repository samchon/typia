import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertGuard_TupleOptional = _test_assertGuard(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) =>
  typia.assertGuard<TupleOptional>(input),
);
