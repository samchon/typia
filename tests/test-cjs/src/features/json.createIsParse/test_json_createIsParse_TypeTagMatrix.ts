import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createIsParse_TypeTagMatrix = (): void =>
  _test_json_isParse("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.json.createIsParse<TypeTagMatrix>(),
  );
