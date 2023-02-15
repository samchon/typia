import typia from "typia";

import { ClassClosure } from "../../structures/ClassClosure";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ClassClosure = _test_validate(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.validate(input),
    ClassClosure.SPOILERS,
);
