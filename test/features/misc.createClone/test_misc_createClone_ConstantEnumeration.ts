import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createClone_ConstantEnumeration = _test_misc_clone(
  "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)(
  typia.misc.createClone<ConstantEnumeration>(),
);
