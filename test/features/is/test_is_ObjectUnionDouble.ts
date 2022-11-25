import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.is(input),
    ObjectUnionDouble.SPOILERS,
);