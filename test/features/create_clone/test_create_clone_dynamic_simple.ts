import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_dynamic_simple = _test_clone(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createClone<DynamicSimple>(),
);
