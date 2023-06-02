import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_stringify_DynamicUndefined = _test_stringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.stringify(input),
);
