import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_FunctionalArrayUnion = _test_isClone(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    TSON.createIsClone<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);