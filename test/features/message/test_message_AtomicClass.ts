import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_message_AtomicClass = _test_message(
    "AtomicClass",
    typia.message<AtomicClass>(),
);
