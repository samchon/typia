import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_alias = _test_stringify(
    "aliased object",
    ObjectAlias.generate(),
    TSON.createStringify<ObjectAlias>(),
);
