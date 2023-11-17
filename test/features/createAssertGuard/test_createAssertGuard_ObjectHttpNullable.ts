import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssertGuard_ObjectHttpNullable = _test_assertGuard(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createAssertGuard<ObjectHttpNullable>(),
);
