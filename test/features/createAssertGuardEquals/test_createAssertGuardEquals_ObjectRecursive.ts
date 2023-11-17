import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertGuardEquals_ObjectRecursive =
    _test_assertGuardEquals("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )(typia.createAssertGuardEquals<ObjectRecursive>());
