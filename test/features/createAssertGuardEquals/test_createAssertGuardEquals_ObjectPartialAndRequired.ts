import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssertGuardEquals_ObjectPartialAndRequired =
    _test_assertGuardEquals(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)(
        typia.createAssertGuardEquals<ObjectPartialAndRequired>(),
    );
