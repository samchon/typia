import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_dynamic_simple = _test_is_stringify(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createIsStringify<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
