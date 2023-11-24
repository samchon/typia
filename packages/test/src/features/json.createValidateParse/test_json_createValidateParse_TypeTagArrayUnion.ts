import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createValidateParse_TypeTagArrayUnion =
  _test_json_validateParse("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )(typia.json.createValidateParse<TypeTagArrayUnion>());
