import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createAssertParse_ObjectNullable = _test_assertParse(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createAssertParse<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
