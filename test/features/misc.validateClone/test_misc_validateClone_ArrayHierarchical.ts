import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_validateClone_ArrayHierarchical =
  _test_misc_validateClone("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )((input) => typia.misc.validateClone<ArrayHierarchical>(input));
