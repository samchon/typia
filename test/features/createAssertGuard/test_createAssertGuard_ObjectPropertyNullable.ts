import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createAssertGuard_ObjectPropertyNullable = _test_assertGuard(
  "ObjectPropertyNullable",
)<ObjectPropertyNullable>(ObjectPropertyNullable)(
  typia.createAssertGuard<ObjectPropertyNullable>(),
);
