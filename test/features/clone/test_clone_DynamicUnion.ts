import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicUnion = _test_clone(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.clone(input),
);