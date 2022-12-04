import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicTemplate = _test_isParse(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.isParse<DynamicTemplate>(input),
    DynamicTemplate.SPOILERS,
);
