import typia from "typia";

import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createValidateQuery_ObjectHttpTypeTag = (): void =>
  _test_http_validateQuery("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.http.createValidateQuery<ObjectHttpTypeTag>());
