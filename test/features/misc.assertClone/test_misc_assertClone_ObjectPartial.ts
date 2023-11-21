import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_misc_assertClone_ObjectPartial = _test_misc_assertClone(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  typia.misc.assertClone<ObjectPartial>(input),
);
