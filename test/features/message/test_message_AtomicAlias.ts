import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_message_AtomicAlias = _test_message(
    "AtomicAlias",
    typia.message<AtomicAlias>(),
);
