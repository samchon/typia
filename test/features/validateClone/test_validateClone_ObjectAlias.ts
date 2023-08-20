import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validateClone_ObjectAlias = _test_validateClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validateClone<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);
