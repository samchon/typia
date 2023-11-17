import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertGuardEquals_FunctionalValueUnion =
    _test_assertGuardEquals("FunctionalValueUnion")<FunctionalValueUnion>(
        FunctionalValueUnion,
    )((input) => typia.assertGuardEquals<FunctionalValueUnion>(input));
