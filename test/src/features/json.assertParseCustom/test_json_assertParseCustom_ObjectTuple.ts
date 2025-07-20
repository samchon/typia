import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_json_assertParseCustom_ObjectTuple = (): void =>
  _test_json_assertParse(CustomGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )((input) =>
    typia.json.assertParse<ObjectTuple>(input, (p) => new CustomGuardError(p)),
  );
