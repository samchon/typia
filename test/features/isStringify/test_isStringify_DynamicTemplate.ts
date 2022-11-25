import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicTemplate = _test_isStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.isStringify(input),
    DynamicTemplate.SPOILERS,
);
