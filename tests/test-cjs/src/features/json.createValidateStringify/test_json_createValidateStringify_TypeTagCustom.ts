import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createValidateStringify_TypeTagCustom = (): void =>
  _test_json_validateStringify("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    typia.json.createValidateStringify<TypeTagCustom>(),
  );
