import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectGenericAlias = _test_isParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isParse<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);