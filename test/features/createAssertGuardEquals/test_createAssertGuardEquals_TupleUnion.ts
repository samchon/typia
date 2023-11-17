import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createAssertGuardEquals_TupleUnion = _test_assertGuardEquals(
    "TupleUnion",
)<TupleUnion>(TupleUnion)(typia.createAssertGuardEquals<TupleUnion>());
