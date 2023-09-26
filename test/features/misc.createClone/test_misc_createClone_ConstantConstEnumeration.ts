import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_misc_createClone_ConstantConstEnumeration = _test_misc_clone(
    "ConstantConstEnumeration",
)<ConstantConstEnumeration>(ConstantConstEnumeration)(
    typia.misc.createClone<ConstantConstEnumeration>(),
);
