import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectGeneric = _test_is(
    "ObjectGeneric",
    ObjectGeneric.generate,
    TSON.createIs<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);