import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_misc_validateClone_ObjectJsonTag = _test_misc_validateClone(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input) =>
  typia.misc.validateClone<ObjectJsonTag>(input),
);
