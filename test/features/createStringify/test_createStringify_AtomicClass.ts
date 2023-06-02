import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_createStringify_AtomicClass = _test_stringify(
    "AtomicClass",
    AtomicClass.generate,
    typia.createStringify<AtomicClass>(),
);
