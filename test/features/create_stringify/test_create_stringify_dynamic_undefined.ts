import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_dynamic_undefined = _test_stringify(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createStringify<DynamicUndefined>(),
);
