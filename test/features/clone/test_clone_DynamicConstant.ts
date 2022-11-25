import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicConstant = _test_clone(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => TSON.clone(input),
);
