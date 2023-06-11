import typia from "../../../src";

import { ClassClosure } from "../../structures/ClassClosure";
import { _test_is } from "../../internal/_test_is";

export const test_createIs_ClassClosure = _test_is(
    "ClassClosure",
    ClassClosure.generate,
    typia.createIs<ClassClosure>(),
    ClassClosure.SPOILERS,
);
