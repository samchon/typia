import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectNullable = _test_assertClone(
    "ObjectNullable",
    ObjectNullable.generate,
    TSON.createAssertClone<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
