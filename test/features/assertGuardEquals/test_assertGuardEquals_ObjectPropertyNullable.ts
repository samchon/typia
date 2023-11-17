import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertGuardEquals_ObjectPropertyNullable =
    _test_assertGuardEquals("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable,
    )((input) => typia.assertGuardEquals<ObjectPropertyNullable>(input));
