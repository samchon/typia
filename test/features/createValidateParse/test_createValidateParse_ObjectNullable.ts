import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createValidateParse_ObjectNullable = _test_validateParse(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createValidateParse<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
