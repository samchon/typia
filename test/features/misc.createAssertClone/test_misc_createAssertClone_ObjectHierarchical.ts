import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createAssertClone_ObjectHierarchical =
  _test_misc_assertClone("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.misc.createAssertClone<ObjectHierarchical>());
