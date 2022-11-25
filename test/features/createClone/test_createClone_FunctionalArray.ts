import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_FunctionalArray = _test_clone(
    "FunctionalArray",
    FunctionalArray.generate,
    TSON.createClone<FunctionalArray>(),
);