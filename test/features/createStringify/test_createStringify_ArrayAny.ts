import typia from "../../../src";

import { ArrayAny } from "../../structures/ArrayAny";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ArrayAny = _test_stringify(
    "ArrayAny",
    ArrayAny.generate,
    typia.createStringify<ArrayAny>(),
);
