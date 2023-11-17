import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_createValidate_ObjectNullable = _test_validate(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.createValidate<ObjectNullable>());
