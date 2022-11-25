import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectUnionDouble = _test_assertClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.assertClone(input),
    ObjectUnionDouble.SPOILERS,
);