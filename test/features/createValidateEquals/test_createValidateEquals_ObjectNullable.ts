import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectNullable = _test_validateEquals(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createValidateEquals<ObjectNullable>(),
);