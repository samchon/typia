import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createIsClone_ArraySimple = _test_isClone(
    "ArraySimple",
    ArraySimple.generate,
    typia.createIsClone<ArraySimple>(),
    ArraySimple.SPOILERS,
);
