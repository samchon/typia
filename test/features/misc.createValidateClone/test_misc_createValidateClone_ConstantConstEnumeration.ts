import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createValidateClone_ConstantConstEnumeration =
  _test_misc_validateClone(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.misc.createValidateClone<ConstantConstEnumeration>(),
  );
