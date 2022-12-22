import typia from "../../../src";
import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_AtomicUnion = _test_message(
    "AtomicUnion",
    typia.message<AtomicUnion>(),
);