import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_validateEquals_ObjectNullable = _test_validateEquals(
    "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.createValidateEquals<ObjectNullable>());
