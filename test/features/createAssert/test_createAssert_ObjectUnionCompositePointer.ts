import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createAssert_ObjectUnionCompositePointer = _test_assert(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
  typia.createAssert<ObjectUnionCompositePointer>(),
);
