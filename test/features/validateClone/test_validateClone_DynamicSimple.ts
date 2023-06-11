import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_validateClone_DynamicSimple = _test_validateClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.validateClone(input),
    DynamicSimple.SPOILERS,
);
