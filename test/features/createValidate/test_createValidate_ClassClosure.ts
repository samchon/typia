import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_validate_ClassClosure = _test_validate(
    "ClassClosure",
    ClassClosure.generate,
    typia.createValidate<ClassClosure>(),
    ClassClosure.SPOILERS,
);
