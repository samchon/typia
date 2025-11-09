import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createIsStringify_TypeTagMatrix = (): void =>
  _test_json_isStringify("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.json.createIsStringify<TypeTagMatrix>(),
  );
