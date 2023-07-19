import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertEquals_ClassGetter = _test_assertEquals<ClassGetter>(
    ClassGetter,
)((input) => typia.assertEquals(input));
