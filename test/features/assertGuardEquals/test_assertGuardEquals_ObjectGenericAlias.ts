import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertGuardEquals_ObjectGenericAlias =
  _test_assertGuardEquals("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )((input) => typia.assertGuardEquals<ObjectGenericAlias>(input));
