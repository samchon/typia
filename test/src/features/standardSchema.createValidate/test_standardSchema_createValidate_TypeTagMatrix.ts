import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_standardSchema_createValidate_TypeTagMatrix = (): void =>
  _test_standardSchema_validate("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.createValidate<TypeTagMatrix>(),
  );
