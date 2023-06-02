import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_is_DynamicEnumeration = _test_is(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.is(input),
    DynamicEnumeration.SPOILERS,
);
