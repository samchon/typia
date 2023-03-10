import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createClone_DynamicUndefined = _test_clone(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createClone<DynamicUndefined>(),
);
