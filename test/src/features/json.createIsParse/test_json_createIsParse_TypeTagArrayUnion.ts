import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_createIsParse_TypeTagArrayUnion = (): void =>
  _test_json_isParse("TypeTagArrayUnion")<TypeTagArrayUnion>(TypeTagArrayUnion)(
    typia.json.createIsParse<TypeTagArrayUnion>(),
  );
