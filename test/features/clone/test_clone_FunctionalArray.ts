import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalArray = _test_clone(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.clone(input),
);
