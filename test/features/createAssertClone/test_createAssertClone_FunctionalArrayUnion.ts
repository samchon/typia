import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_FunctionalArrayUnion = _test_assertClone(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    TSON.createAssertClone<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);