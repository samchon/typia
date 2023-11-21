import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_misc_validatePrune_ObjectRequired = _test_misc_validatePrune(
  "ObjectRequired",
)<ObjectRequired>(ObjectRequired)((input) =>
  typia.misc.validatePrune<ObjectRequired>(input),
);
