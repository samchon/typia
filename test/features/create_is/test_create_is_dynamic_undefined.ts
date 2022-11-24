import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_is } from "../internal/_test_is";

export const test_create_is_dynamic_undefined = _test_is(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createIs<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
