import typia from "../../../src";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createAssertQuery_ObjectHttpUndefindable =
    _test_http_assertQuery("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )(typia.http.createAssertQuery<ObjectHttpUndefindable>());
