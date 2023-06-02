import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertParse_ObjectNullable = _test_assertParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.assertParse<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
