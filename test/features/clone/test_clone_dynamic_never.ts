import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_clone } from "./_test_clone";

export const test_clone_dynamic_never = _test_clone(
    "dynamic tree",
    DynamicNever.generate,
    (input) => TSON.clone(input),
);
