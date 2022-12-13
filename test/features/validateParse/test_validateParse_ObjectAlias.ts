import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectAlias = _test_validateParse(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validateParse<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);