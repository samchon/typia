import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_createAssertPrune_ObjectUnionDouble =
  _test_misc_assertPrune("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )(typia.misc.createAssertPrune<ObjectUnionDouble>());
