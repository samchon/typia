import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertGuard_ObjectHierarchical = _test_assertGuard(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)(
  typia.createAssertGuard<ObjectHierarchical>(),
);
