import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectGenericAlias = _test_assertEquals(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => TSON.assertEquals(input),
);