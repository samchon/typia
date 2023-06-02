import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertParse_ObjectPropertyNullable = _test_assertParse(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createAssertParse<ObjectPropertyNullable>(),
    ObjectPropertyNullable.SPOILERS,
);
