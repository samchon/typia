import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createIsClone_ObjectGeneric = _test_isClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIsClone<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
