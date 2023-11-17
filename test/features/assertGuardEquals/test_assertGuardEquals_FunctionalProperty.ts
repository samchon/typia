import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertGuardEquals_FunctionalProperty =
    _test_assertGuardEquals("FunctionalProperty")<FunctionalProperty>(
        FunctionalProperty,
    )((input) => typia.assertGuardEquals<FunctionalProperty>(input));
