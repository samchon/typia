import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_createClone_ConstantConstEnumeration = _test_clone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createClone<ConstantConstEnumeration>(),
);
