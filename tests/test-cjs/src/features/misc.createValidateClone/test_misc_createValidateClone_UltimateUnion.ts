import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_createValidateClone_UltimateUnion = (): void =>
  _test_misc_validateClone("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.misc.createValidateClone<UltimateUnion>(),
  );
