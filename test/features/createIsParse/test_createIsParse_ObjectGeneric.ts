import typia from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectGeneric = _test_isParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIsParse<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);