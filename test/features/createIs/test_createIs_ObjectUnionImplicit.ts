import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createIs_ObjectUnionImplicit = _test_is(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)(typia.createIs<ObjectUnionImplicit>());
