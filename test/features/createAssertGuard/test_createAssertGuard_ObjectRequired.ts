import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertGuard_ObjectRequired = _test_assertGuard(
    "ObjectRequired",
)<ObjectRequired>(ObjectRequired)(typia.createAssertGuard<ObjectRequired>());
