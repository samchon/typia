import typia from "../../../src";

import { ClassGetter } from "../../structures/ClassGetter";
import { _test_equals } from "../../internal/_test_equals";

export const test_equals_ClassGetter = _test_equals(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.equals(input),
);
