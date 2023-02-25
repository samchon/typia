import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ClassClosure = _test_equals(
    "ClassClosure",
    ClassClosure.generate,
    typia.createEquals<ClassClosure>(),
);
