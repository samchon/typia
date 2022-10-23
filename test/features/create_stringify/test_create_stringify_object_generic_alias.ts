import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_generic_alias = _test_stringify(
    "generic aliased object",
    ObjectGenericAlias.generate(),
    TSON.createStringify<ObjectGenericAlias>(),
);
