import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_misc_assertPrune_ObjectPartialAndRequired =
  _test_misc_assertPrune("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input) => typia.misc.assertPrune<ObjectPartialAndRequired>(input));
