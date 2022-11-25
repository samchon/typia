import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalArray = _test_assertClone(
    "FunctionalArray",
    FunctionalArray.generate,
    TSON.createAssertClone<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);