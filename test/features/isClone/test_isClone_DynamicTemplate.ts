import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicTemplate = _test_isClone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.isClone(input),
    DynamicTemplate.SPOILERS,
);