import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_clone } from "./_test_clone";

export const test_clone_dynamic_simple = _test_clone(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.clone(input),
);
