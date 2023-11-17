import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertGuardEquals_ObjectHierarchical =
  _test_assertGuardEquals("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.createAssertGuardEquals<ObjectHierarchical>());
