import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectSimple = _test_assertEquals(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => TSON.assertEquals(input),
);
