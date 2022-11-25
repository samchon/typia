import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ObjectPropertyNullable = _test_isStringify(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    TSON.createIsStringify<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
