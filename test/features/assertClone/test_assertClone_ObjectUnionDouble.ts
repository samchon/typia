import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_assertClone_ObjectUnionDouble = _test_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.assertClone(input),
    ObjectUnionDouble.SPOILERS,
);
