import typia from "../../../src";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_http_createAssertQuery_ObjectHttpTypeTag =
    _test_http_assertQuery("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag,
    )(typia.http.createAssertQuery<ObjectHttpTypeTag>());
