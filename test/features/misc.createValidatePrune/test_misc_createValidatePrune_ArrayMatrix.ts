import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_misc_createValidatePrune_ArrayMatrix =
  _test_misc_validatePrune("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
    typia.misc.createValidatePrune<ArrayMatrix>(),
  );
