import typia from "../../../src";

import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectAlias = _test_validateEquals(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createValidateEquals<ObjectAlias>(),
);
