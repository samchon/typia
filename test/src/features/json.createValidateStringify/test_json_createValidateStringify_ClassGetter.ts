import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createValidateStringify_ClassGetter = (): void =>
  _test_json_validateStringify("ClassGetter")<ClassGetter>(ClassGetter)(
    typia.json.createValidateStringify<ClassGetter>(),
  );
