import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_misc_isClone_ObjectUndefined = _test_misc_isClone(
  "ObjectUndefined",
)<ObjectUndefined>(ObjectUndefined)((input) =>
  typia.misc.isClone<ObjectUndefined>(input),
);
