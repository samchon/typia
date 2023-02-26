import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_clone_ConstantConstEnumeration = _test_clone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.clone(input),
);
