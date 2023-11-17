import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_assertGuardEquals_FunctionalTupleUnion =
    _test_assertGuardEquals("FunctionalTupleUnion")<FunctionalTupleUnion>(
        FunctionalTupleUnion,
    )((input) => typia.assertGuardEquals<FunctionalTupleUnion>(input));
