import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectPropertyNullable = _test_validate(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    TSON.createValidate<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
