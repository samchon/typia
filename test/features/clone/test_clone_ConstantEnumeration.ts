import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_clone_ConstantEnumeration = _test_clone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.clone(input),
);
