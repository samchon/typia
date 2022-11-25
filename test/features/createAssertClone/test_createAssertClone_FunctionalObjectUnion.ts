import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalObjectUnion = _test_assertClone(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    TSON.createAssertClone<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);