import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectNullable = _test_assertParse(
    "ObjectNullable",
    ObjectNullable.generate,
    TSON.createAssertParse<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
