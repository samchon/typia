import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createValidateStringify_TypeTagMatrix = (): void =>
  _test_json_validateStringify("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
    typia.json.createValidateStringify<TypeTagMatrix>(),
  );
