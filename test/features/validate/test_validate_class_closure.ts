import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validate } from "./_test_validate";

export const test_validate_class_closure = _test_validate(
    "class closure",
    ClassClosure.generate,
    (input) => TSON.validate(input),
    ClassClosure.SPOILERS,
);
