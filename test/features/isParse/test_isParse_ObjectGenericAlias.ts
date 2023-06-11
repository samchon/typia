import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_isParse_ObjectGenericAlias = _test_isParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isParse<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
