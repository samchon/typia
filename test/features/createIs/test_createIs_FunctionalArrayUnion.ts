import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalArrayUnion = _test_is(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    TSON.createIs<FunctionalArrayUnion>(),
    FunctionalArrayUnion.SPOILERS,
);
