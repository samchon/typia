import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_misc_createValidateClone_ObjectHierarchical =
  _test_misc_validateClone("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )(typia.misc.createValidateClone<ObjectHierarchical>());
