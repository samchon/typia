import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertGuardEquals_TupleHierarchical =
    _test_assertGuardEquals("TupleHierarchical")<TupleHierarchical>(
        TupleHierarchical,
    )(typia.createAssertGuardEquals<TupleHierarchical>());
