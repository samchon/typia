import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_createIsStringify_ClassMethod = (): void =>
  _test_json_isStringify("ClassMethod")<ClassMethod>(ClassMethod)(
    typia.json.createIsStringify<ClassMethod>(),
  );
