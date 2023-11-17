import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createEquals_ObjectGenericUnion = _test_equals(
  "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(
  typia.createEquals<ObjectGenericUnion>(),
);
