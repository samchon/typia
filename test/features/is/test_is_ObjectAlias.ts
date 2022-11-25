import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectAlias = _test_is(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.is(input),
    ObjectAlias.SPOILERS,
);