import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_validateEquals_ObjectPropertyNullable = _test_validateEquals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createValidateEquals<ObjectPropertyNullable>(),
);
