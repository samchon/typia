import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_assertParseCustom_TypeTagArrayUnion =
  _test_json_assertParse(CustomGuardError)(
    "TypeTagArrayUnion",
  )<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.json.assertParse<TypeTagArrayUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
