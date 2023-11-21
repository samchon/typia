import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_misc_createValidatePrune_ObjectTuple =
  _test_misc_validatePrune("ObjectTuple")<ObjectTuple>(ObjectTuple)(
    typia.misc.createValidatePrune<ObjectTuple>(),
  );
