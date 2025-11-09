import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_misc_createValidatePrune_ClassPropertyAssignment = (): void =>
  _test_misc_validatePrune("ClassPropertyAssignment")<ClassPropertyAssignment>(
    ClassPropertyAssignment,
  )(typia.misc.createValidatePrune<ClassPropertyAssignment>());
