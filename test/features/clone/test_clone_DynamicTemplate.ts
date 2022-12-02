import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicTemplate = _test_clone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.clone(input),
);
