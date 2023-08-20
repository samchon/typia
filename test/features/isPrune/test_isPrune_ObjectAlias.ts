import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_isPrune_ObjectAlias = _test_isPrune(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.isPrune<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);
