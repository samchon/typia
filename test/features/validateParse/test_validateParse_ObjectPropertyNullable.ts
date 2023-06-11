import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validateParse_ObjectPropertyNullable = _test_validateParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.validateParse<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
