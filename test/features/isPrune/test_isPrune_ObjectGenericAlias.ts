import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectGenericAlias = _test_isPrune(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isPrune(input),
    ObjectGenericAlias.SPOILERS,
);