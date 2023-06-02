import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createValidateEquals_ObjectNullable = _test_validateEquals(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createValidateEquals<ObjectNullable>(),
);
