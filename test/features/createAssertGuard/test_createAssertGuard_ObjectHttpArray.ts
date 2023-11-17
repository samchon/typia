import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_createAssertGuard_ObjectHttpArray = _test_assertGuard(
    "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(typia.createAssertGuard<ObjectHttpArray>());
