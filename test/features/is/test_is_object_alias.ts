import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is } from "../internal/_test_is";

export const test_is_object_alias = _test_is(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.is(input),
    ObjectAlias.SPOILERS,
);
