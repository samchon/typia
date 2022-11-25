import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectGenericAlias = _test_is(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => TSON.is(input),
    ObjectGenericAlias.SPOILERS,
);