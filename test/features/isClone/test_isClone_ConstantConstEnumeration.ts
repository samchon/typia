import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_isClone_ConstantConstEnumeration = _test_isClone(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    (input) => typia.isClone(input),
    ConstantConstEnumeration.SPOILERS,
);
