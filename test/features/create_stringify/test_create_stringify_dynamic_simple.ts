import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_dynamic_simple = _test_stringify(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createStringify<DynamicSimple>(),
);
