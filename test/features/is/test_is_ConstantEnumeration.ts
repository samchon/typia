import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_is_ConstantEnumeration = _test_is(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.is(input),
    ConstantEnumeration.SPOILERS,
);
