import typia from "typia";

import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createValidateQuery_ObjectHttpConstant = (): void =>
  _test_http_validateQuery("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.http.createValidateQuery<ObjectHttpConstant>());
