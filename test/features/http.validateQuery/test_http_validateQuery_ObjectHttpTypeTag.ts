import typia from "../../../src";
import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_validateQuery_ObjectHttpTypeTag =
    _test_http_validateQuery("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )((input) => typia.http.validateQuery<ObjectHttpTypeTag>(input));
