import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createIsParse_ObjectGeneric = _test_isParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createIsParse<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
