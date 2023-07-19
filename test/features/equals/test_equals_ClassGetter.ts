import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_equals_ClassGetter = _test_equals<ClassGetter>(ClassGetter)(
    (input) => typia.equals(input),
);
