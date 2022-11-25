import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicNever = _test_isClone(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.isClone(input),
    DynamicNever.SPOILERS,
);
