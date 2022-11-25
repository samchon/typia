import TSON from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_FunctionalValue = _test_assertEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    TSON.createAssertEquals<FunctionalValue>(),
);
