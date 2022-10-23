import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_class_closure = _test_validate(
    "class closure",
    ClassClosure.generate,
    TSON.createValidate<ClassClosure>(),
    ClassClosure.SPOILERS,
);
