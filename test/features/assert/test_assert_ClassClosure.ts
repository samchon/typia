import typia from "../../../src";

import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_ClassClosure = _test_assert(
    "ClassClosure",
    ClassClosure.generate,
    (input) => typia.assert(input),
    ClassClosure.SPOILERS,
);
