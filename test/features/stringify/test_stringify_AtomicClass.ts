import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_stringify_AtomicClass = _test_stringify(
    "AtomicClass",
    AtomicClass.generate,
    (input) => typia.stringify<AtomicClass>(input),
);
