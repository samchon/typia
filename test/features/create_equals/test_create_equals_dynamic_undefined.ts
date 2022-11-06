import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_undefined = _test_equals(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createEquals<DynamicUndefined>(),
);
