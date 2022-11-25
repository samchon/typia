import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_dynamic_simple = _test_stringify(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.stringify(input),
);
