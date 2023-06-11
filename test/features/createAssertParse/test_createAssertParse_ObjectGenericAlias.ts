import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createAssertParse<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
