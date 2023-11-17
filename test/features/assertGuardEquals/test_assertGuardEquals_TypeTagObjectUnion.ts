import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assertGuardEquals_TypeTagObjectUnion =
    _test_assertGuardEquals("TypeTagObjectUnion")<TypeTagObjectUnion>(
        TypeTagObjectUnion,
    )((input) => typia.assertGuardEquals<TypeTagObjectUnion>(input));
