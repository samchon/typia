import typia from "../../../src";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_DynamicUndefined = _test_stringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createStringify<DynamicUndefined>(),
);
