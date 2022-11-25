import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_alias = _test_is_stringify(
    "aliased object",
    ObjectAlias.generate,
    (input) => TSON.isStringify(input),
    ObjectAlias.SPOILERS,
);
