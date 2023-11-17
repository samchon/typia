import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createEquals_ObjectHttpNullable = _test_equals(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createEquals<ObjectHttpNullable>(),
);
