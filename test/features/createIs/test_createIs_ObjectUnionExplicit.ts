import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createIs_ObjectUnionExplicit = _test_is(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)(
  typia.createIs<ObjectUnionExplicit>(),
);
