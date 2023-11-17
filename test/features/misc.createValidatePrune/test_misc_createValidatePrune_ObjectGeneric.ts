import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_createValidatePrune_ObjectGeneric =
  _test_misc_validatePrune("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
    typia.misc.createValidatePrune<ObjectGeneric>(),
  );
