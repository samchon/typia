import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalPropertyUnion = _test_clone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.clone(input),
);
