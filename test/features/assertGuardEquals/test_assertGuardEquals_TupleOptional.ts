import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertGuardEquals_TupleOptional = _test_assertGuardEquals(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) =>
  typia.assertGuardEquals<TupleOptional>(input),
);
