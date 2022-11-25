import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalValueUnion = _test_clone(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => TSON.clone(input),
);