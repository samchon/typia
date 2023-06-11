import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_validateParse_ObjectNullable = _test_validateParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.validateParse<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
