import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalValueUnion = _test_is(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createIs<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);