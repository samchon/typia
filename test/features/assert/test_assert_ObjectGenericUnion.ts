import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_assert_ObjectGenericUnion = _test_assert(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
  typia.assert<ObjectGenericUnion>(input),
);
