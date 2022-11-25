import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectGeneric = _test_assertClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    TSON.createAssertClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);