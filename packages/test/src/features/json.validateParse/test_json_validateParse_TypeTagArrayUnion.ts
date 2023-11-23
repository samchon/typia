import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_validateParse_TypeTagArrayUnion =
  _test_json_validateParse("TypeTagArrayUnion")<TypeTagArrayUnion>(
    TypeTagArrayUnion,
  )((input) => typia.json.validateParse<TypeTagArrayUnion>(input));
