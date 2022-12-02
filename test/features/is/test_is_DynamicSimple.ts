import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is } from "../internal/_test_is";

export const test_is_DynamicSimple = _test_is(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => TSON.is(input),
    DynamicSimple.SPOILERS,
);
