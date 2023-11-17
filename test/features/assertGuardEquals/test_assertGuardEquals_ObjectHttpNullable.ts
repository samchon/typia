import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_assertGuardEquals_ObjectHttpNullable =
    _test_assertGuardEquals("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )((input) => typia.assertGuardEquals<ObjectHttpNullable>(input));
