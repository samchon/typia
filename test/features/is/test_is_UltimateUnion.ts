import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is } from "../internal/_test_is";

export const test_is_UltimateUnion = _test_is(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => TSON.is(input),
    UltimateUnion.SPOILERS,
);
