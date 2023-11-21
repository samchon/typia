import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createValidate_ObjectHttpNullable = _test_validate(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createValidate<ObjectHttpNullable>(),
);
