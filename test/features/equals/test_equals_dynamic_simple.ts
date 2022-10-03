import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_equals } from "./_test_equals";

export const test_equals_dynamic_simple = _test_equals(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.equals(input),
    0,
);
