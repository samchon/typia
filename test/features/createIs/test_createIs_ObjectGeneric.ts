import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectGeneric = _test_is(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIs<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);