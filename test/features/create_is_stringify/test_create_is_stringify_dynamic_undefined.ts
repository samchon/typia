import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_dynamic_undefined = _test_is_stringify(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createIsStringify<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
