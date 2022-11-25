import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalObjectUnion = _test_clone(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    (input) => TSON.clone(input),
);