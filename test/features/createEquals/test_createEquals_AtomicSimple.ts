import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_createEquals_AtomicSimple = _test_equals(
    "AtomicSimple",
)<AtomicSimple>(AtomicSimple)(typia.createEquals<AtomicSimple>());
