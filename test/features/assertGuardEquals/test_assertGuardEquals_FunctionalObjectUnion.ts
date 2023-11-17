import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assertGuardEquals_FunctionalObjectUnion =
    _test_assertGuardEquals("FunctionalObjectUnion")<FunctionalObjectUnion>(
        FunctionalObjectUnion,
    )((input) => typia.assertGuardEquals<FunctionalObjectUnion>(input));
