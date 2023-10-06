import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createValidateEquals_ObjectUnionExplicit = _test_validateEquals(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.createValidateEquals<ObjectUnionExplicit>());
