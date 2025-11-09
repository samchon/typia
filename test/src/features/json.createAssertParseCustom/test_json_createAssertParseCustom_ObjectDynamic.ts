import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ObjectDynamic = (): void => _test_json_assertParse(CustomGuardError)(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)(typia.json.createAssertParse<ObjectDynamic>((p) => new CustomGuardError(p)));
