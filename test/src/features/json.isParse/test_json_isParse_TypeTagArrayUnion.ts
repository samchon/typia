import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_isParse_TypeTagArrayUnion = (): void => _test_json_isParse(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.json.isParse<TypeTagArrayUnion>(input));
