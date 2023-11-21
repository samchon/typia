import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertGuardEquals_ToJsonUnion = _test_assertGuardEquals(
  "ToJsonUnion",
)<ToJsonUnion>(ToJsonUnion)(typia.createAssertGuardEquals<ToJsonUnion>());
