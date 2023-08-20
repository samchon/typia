import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_clone_DynamicTemplate = _test_clone(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.clone<DynamicTemplate>(input),
);
