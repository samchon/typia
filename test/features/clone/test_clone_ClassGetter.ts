import typia from "typia";

import { ClassGetter } from "../../structures/ClassGetter";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ClassGetter = _test_clone(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.clone(input),
);
