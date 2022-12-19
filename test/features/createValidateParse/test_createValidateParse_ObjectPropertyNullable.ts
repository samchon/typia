import typia from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectPropertyNullable = _test_validateParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createValidateParse<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);