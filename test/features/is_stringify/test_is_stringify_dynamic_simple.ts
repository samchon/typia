import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_dynamic_simple = _test_is_stringify(
    "dynamic simple",
    DynamicSimple.generate,
    (input) => TSON.isStringify(input),
    DynamicSimple.SPOILERS,
);
