import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createPrune_ConstantEnumeration = _test_misc_prune(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)(
  typia.misc.createPrune<ConstantEnumeration>(),
);
