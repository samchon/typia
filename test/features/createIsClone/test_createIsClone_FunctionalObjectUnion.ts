import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalObjectUnion = _test_isClone(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    TSON.createIsClone<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);