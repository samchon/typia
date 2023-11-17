import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertGuard_ObjectOptional = _test_assertGuard(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.createAssertGuard<ObjectOptional>());
