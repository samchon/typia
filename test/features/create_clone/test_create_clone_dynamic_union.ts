import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_dynamic_union = _test_clone(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.clone<DynamicUnion>(input),
);
