import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_misc_assertClone_ObjectNullable = _test_misc_assertClone(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.misc.assertClone(input),
    ObjectNullable.SPOILERS,
);
