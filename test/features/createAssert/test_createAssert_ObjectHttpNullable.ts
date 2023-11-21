import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_createAssert_ObjectHttpNullable = _test_assert(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)(
  typia.createAssert<ObjectHttpNullable>(),
);
