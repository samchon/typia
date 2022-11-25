import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectAlias = _test_assertEquals(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.assertEquals(input),
);