import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is } from "../internal/_test_is";

export const test_create_is_dynamic_simple = _test_is(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createIs<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
