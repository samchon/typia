import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assertGuardEquals_ObjectGenericUnion =
    _test_assertGuardEquals("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )((input) => typia.assertGuardEquals<ObjectGenericUnion>(input));
