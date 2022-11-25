import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_FunctionalObjectUnion = _test_assertEquals(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    TSON.createAssertEquals<FunctionalObjectUnion>(),
);