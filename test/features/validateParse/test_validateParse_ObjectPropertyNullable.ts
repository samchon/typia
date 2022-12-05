import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectPropertyNullable = _test_validateParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => TSON.validateParse<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);
