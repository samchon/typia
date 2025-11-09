import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_createEquals_TypeTagMatrix = (): void =>
  _test_equals("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.createEquals<TypeTagMatrix>(),
  );
