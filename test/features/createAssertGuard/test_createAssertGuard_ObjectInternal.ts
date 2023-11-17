import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createAssertGuard_ObjectInternal = _test_assertGuard(
    "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.createAssertGuard<ObjectInternal>());
