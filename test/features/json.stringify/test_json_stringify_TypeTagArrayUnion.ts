import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_json_stringify_TypeTagArrayUnion = _test_json_stringify(
    "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
    typia.json.stringify<TypeTagArrayUnion>(input),
);
