import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createValidateStringify_TypeTagArrayUnion = (): void =>
  _test_json_validateStringify("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(typia.json.createValidateStringify<TypeTagArrayUnion>());
