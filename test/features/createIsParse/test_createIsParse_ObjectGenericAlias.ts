import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createIsParse_ObjectGenericAlias = _test_isParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createIsParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
