import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_clone } from "./_test_clone";

export const test_clone_dynamic_union = _test_clone(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.clone<DynamicUnion>(input),
);
