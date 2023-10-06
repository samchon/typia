import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertEquals_ObjectGenericAlias = _test_assertEquals(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)(typia.createAssertEquals<ObjectGenericAlias>());
