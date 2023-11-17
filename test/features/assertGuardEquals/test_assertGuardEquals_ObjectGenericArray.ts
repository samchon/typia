import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_assertGuardEquals_ObjectGenericArray =
  _test_assertGuardEquals("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.assertGuardEquals<ObjectGenericArray>(input));
