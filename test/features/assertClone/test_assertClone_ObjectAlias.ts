import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectAlias = _test_assertClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.assertClone(input),
    ObjectAlias.SPOILERS,
);