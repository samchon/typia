import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertClone_ArraySimple = _test_assertClone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
