import typia from "../../../src";

import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_validateQuery_ObjectHttpConstant = _test_http_validateQuery(
    "ObjectHttpConstant",
)<ObjectHttpConstant>(
    ObjectHttpConstant
)((input) => typia.http.validateQuery<ObjectHttpConstant>(input));
