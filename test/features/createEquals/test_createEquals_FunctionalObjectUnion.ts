import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_FunctionalObjectUnion = _test_equals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    TSON.createEquals<FunctionalObjectUnion>(),
);