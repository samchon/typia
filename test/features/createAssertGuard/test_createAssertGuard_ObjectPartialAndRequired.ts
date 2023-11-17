import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_createAssertGuard_ObjectPartialAndRequired =
    _test_assertGuard("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
        ObjectPartialAndRequired,
    )(typia.createAssertGuard<ObjectPartialAndRequired>());
