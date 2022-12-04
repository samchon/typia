import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicNever = _test_validateClone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.validateClone(input),
    DynamicNever.SPOILERS,
);
