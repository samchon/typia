import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createValidateEquals_FunctionalArrayUnion = (): void =>
  _test_validateEquals("FunctionalArrayUnion")<FunctionalArrayUnion>(
    FunctionalArrayUnion,
  )(typia.createValidateEquals<FunctionalArrayUnion>());
