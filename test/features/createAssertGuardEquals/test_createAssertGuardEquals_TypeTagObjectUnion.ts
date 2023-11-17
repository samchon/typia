import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertGuardEquals_TypeTagObjectUnion =
    _test_assertGuardEquals("TypeTagObjectUnion")<TypeTagObjectUnion>(
        TypeTagObjectUnion,
    )(typia.createAssertGuardEquals<TypeTagObjectUnion>());
