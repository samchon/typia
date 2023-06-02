import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertParse<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
