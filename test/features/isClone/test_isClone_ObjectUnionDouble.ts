import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectUnionDouble = _test_isClone(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.isClone(input),
    ObjectUnionDouble.SPOILERS,
);
