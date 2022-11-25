import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalArray = _test_isClone(
    "FunctionalArray",
    FunctionalArray.generate,
    TSON.createIsClone<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);