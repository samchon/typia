import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectDynamic = _test_assertClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => TSON.assertClone(input),
    ObjectDynamic.SPOILERS,
);