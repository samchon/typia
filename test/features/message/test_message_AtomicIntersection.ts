import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_message_AtomicIntersection = _test_message(
    "AtomicIntersection",
    typia.message<AtomicIntersection>(),
);
