import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertClone_ObjectPropertyNullable = _test_assertClone(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createAssertClone<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
