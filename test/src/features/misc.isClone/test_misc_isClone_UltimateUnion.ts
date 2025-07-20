import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_isClone_UltimateUnion = (): void =>
  _test_misc_isClone("UltimateUnion")<UltimateUnion>(UltimateUnion)((input) =>
    typia.misc.isClone<UltimateUnion>(input),
  );
