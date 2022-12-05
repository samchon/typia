import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicSimple = _test_validateClone(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => TSON.validateClone(input),
    DynamicSimple.SPOILERS,
);
