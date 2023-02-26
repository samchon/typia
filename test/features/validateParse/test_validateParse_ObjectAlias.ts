import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validateParse_ObjectAlias = _test_validateParse(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validateParse<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);
