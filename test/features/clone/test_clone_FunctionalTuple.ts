import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalTuple = _test_clone(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input) => TSON.clone(input),
);
