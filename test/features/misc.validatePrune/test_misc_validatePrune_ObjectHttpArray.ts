import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_validatePrune_ObjectHttpArray = _test_misc_validatePrune(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.misc.validatePrune<ObjectHttpArray>(input),
);
