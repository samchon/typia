import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createAssertGuard_ObjectIntersection = _test_assertGuard(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)(
  typia.createAssertGuard<ObjectIntersection>(),
);
