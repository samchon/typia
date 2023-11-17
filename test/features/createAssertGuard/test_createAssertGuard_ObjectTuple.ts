import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_createAssertGuard_ObjectTuple = _test_assertGuard(
    "ObjectTuple",
)<ObjectTuple>(ObjectTuple)(typia.createAssertGuard<ObjectTuple>());
