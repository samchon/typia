import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_clone_DynamicConstant = _test_clone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.clone(input),
);
