import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createIs_DynamicUndefined = _test_is(
    "DynamicUndefined",
    DynamicUndefined.generate,
    typia.createIs<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
