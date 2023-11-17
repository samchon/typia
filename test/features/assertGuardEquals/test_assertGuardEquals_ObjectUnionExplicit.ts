import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertGuardEquals_ObjectUnionExplicit =
  _test_assertGuardEquals("ObjectUnionExplicit")<ObjectUnionExplicit>(
    ObjectUnionExplicit,
  )((input) => typia.assertGuardEquals<ObjectUnionExplicit>(input));
