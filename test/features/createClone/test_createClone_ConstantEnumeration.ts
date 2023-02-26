import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_createClone_ConstantEnumeration = _test_clone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createClone<ConstantEnumeration>(),
);
