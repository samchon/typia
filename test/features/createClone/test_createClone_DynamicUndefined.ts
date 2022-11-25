import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicUndefined = _test_clone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    TSON.createClone<DynamicUndefined>(),
);
