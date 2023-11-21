import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_validateClone_ObjectUndefined = _test_misc_validateClone(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.misc.validateClone<ObjectUndefined>(input),
);
