import typia from "../../../src";
import { AtomicAlias } from "../../structures/AtomicAlias";
import { _test_message } from "../internal/_test_message";

export const test_message_AtomicAlias = _test_message(
    "AtomicAlias",
    typia.message<AtomicAlias>(),
);