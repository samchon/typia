import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_clone_ClassGetter = _test_clone(
    "ClassGetter",
    ClassGetter.generate,
    (input) => typia.clone(input),
);
