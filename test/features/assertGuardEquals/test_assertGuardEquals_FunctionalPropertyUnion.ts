import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertGuardEquals_FunctionalPropertyUnion =
    _test_assertGuardEquals("FunctionalPropertyUnion")<FunctionalPropertyUnion>(
        FunctionalPropertyUnion,
    )((input) => typia.assertGuardEquals<FunctionalPropertyUnion>(input));
