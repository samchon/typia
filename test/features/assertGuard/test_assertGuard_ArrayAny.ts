import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assertGuard_ArrayAny = _test_assertGuard(
    "ArrayAny",
)<ArrayAny>(ArrayAny)((input) => typia.assertGuard<ArrayAny>(input));
