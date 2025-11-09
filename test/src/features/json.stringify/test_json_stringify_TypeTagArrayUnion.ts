import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_stringify_TypeTagArrayUnion = (): void => _test_json_stringify(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(
    TypeTagArrayUnion
)((input) => typia.json.stringify<TypeTagArrayUnion>(input));
