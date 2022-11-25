import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectUnionDouble = _test_assertEquals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => TSON.assertEquals(input),
);