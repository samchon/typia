import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_assertParseCustom_ClassGetter = (): void =>
  _test_json_assertParse(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )((input) =>
    typia.json.assertParse<ClassGetter>(input, (p) => new CustomGuardError(p)),
  );
