import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createIsClone_ConstantEnumeration = _test_misc_isClone(
    "ConstantEnumeration",
)<ConstantEnumeration>(ConstantEnumeration)(
    typia.misc.createIsClone<ConstantEnumeration>(),
);
