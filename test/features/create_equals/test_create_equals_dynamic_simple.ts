import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_dynamic_simple = _test_equals(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createEquals<DynamicSimple>(),
    0,
);
