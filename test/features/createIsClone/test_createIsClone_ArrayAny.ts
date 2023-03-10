import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createIsClone_ArrayAny = _test_isClone(
    "ArrayAny",
    ArrayAny.generate,
    typia.createIsClone<ArrayAny>(),
    ArrayAny.SPOILERS,
);
