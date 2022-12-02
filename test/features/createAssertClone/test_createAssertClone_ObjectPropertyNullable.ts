import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectPropertyNullable = _test_assertClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    TSON.createAssertClone<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
