import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_createAssertPrune_ObjectLiteralProperty =
  _test_misc_assertPrune("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )(typia.misc.createAssertPrune<ObjectLiteralProperty>());
