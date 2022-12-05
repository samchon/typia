import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectPropertyNullable = _test_isParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    TSON.createIsParse<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
