import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertGuard_ToJsonUnion = _test_assertGuard(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.createAssertGuard<ToJsonUnion>());
