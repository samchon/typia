import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createStringify_DynamicUndefined = _test_stringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createStringify<DynamicUndefined>(),
);
