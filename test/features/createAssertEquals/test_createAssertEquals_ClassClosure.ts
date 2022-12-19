import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ClassClosure = _test_assertEquals(
    "ClassClosure",
    ClassClosure.generate,
    typia.createAssertEquals<ClassClosure>(),
);