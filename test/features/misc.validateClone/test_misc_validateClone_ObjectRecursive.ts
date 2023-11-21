import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_validateClone_ObjectRecursive = _test_misc_validateClone(
  "ObjectRecursive",
)<ObjectRecursive>(ObjectRecursive)((input) =>
  typia.misc.validateClone<ObjectRecursive>(input),
);
