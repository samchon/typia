import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectGenericAlias = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)(typia.createAssertEquals<ObjectGenericAlias>((p) => new CustomGuardError(p)));
