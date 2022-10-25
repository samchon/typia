import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_alias = _test_is_stringify(
    "aliased object",
    ObjectAlias.generate,
    TSON.createIsStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
