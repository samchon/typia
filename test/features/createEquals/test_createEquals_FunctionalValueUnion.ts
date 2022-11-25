import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalValueUnion = _test_equals(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    TSON.createEquals<FunctionalValueUnion>(),
);
