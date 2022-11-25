import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalArrayUnion = _test_clone(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => TSON.clone(input),
);
