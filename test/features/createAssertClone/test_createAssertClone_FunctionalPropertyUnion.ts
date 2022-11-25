import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalPropertyUnion = _test_assertClone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    TSON.createAssertClone<FunctionalPropertyUnion>(),
    FunctionalPropertyUnion.SPOILERS,
);
