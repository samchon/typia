import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ClassClosure = _test_validate(
    "ClassClosure",
    ClassClosure.generate,
    typia.createValidate<ClassClosure>(),
    ClassClosure.SPOILERS,
);