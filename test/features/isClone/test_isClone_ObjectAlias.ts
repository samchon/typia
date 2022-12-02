import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectAlias = _test_isClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.isClone(input),
    ObjectAlias.SPOILERS,
);
