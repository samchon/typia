import typia from "typia";

import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ClassClosure = _test_assertEquals(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.assertEquals(input),
);
