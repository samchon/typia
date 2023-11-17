import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertGuard_TupleUnion = _test_assertGuard(
    "TupleUnion",
)<TupleUnion>(TupleUnion)((input) => typia.assertGuard<TupleUnion>(input));
