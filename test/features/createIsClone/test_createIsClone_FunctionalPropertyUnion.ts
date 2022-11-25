import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalPropertyUnion = _test_isClone(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    TSON.createIsClone<FunctionalPropertyUnion>(),
    FunctionalPropertyUnion.SPOILERS,
);
