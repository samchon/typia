import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ObjectGenericAlias = _test_validateParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.validateParse<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
