import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_validateEquals_TypeTagMatrix = (): void =>
  _test_validateEquals("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
    typia.validateEquals<TypeTagMatrix>(input),
  );
