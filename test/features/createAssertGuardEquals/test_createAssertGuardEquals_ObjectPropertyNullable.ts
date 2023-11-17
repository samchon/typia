import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertGuardEquals_ObjectPropertyNullable =
    _test_assertGuardEquals("ObjectPropertyNullable")<ObjectPropertyNullable>(
        ObjectPropertyNullable,
    )(typia.createAssertGuardEquals<ObjectPropertyNullable>());
