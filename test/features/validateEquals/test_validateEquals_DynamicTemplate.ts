import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicTemplate = _test_validateEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.validateEquals(input),
);
