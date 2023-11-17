import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_createAssertGuard_ObjectUndefined = _test_assertGuard(
    "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)(typia.createAssertGuard<ObjectUndefined>());
