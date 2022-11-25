import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectDynamic = _test_assert(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => TSON.assert(input),
    ObjectDynamic.SPOILERS,
);