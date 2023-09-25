import typia from "../../../src";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_assertHeaders_ObjectHttpTypeTag =
    _test_http_assertHeaders("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )((input) => typia.http.assertHeaders<ObjectHttpTypeTag>(input));
