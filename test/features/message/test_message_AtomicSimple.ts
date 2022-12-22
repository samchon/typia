import typia from "../../../src";
import { AtomicSimple } from "../../structures/AtomicSimple";
import { _test_message } from "../internal/_test_message";

export const test_message_AtomicSimple = _test_message(
    "AtomicSimple",
    typia.message<AtomicSimple>(),
);