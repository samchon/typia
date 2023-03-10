import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_message_AtomicUnion = _test_message(
    "AtomicUnion",
    typia.message<AtomicUnion>(),
);
