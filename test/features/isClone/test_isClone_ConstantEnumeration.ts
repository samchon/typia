import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_isClone_ConstantEnumeration = _test_isClone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.isClone(input),
    ConstantEnumeration.SPOILERS,
);
