import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_misc_assertClone_ObjectUnionDouble = _test_misc_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.misc.assertClone(input),
    ObjectUnionDouble.SPOILERS,
);
