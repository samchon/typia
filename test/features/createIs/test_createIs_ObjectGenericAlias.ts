import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectGenericAlias = _test_is(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    TSON.createIs<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
