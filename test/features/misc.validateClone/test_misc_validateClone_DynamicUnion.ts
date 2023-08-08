import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_validateClone_DynamicUnion = _test_misc_validateClone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.misc.validateClone(input),
    DynamicUnion.SPOILERS,
);
