import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_alias = _test_is(
    "aliased object",
    ObjectAlias.generate,
    TSON.createIs<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
