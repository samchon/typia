import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_message_AtomicSimple = _test_message(
    "AtomicSimple",
    typia.message<AtomicSimple>(),
);
