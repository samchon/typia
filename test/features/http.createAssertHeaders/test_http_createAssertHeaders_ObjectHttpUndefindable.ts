import typia from "../../../src";
import { _test_http_assertHeaders } from "../../internal/_test_http_assertHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createAssertHeaders_ObjectHttpUndefindable =
    _test_http_assertHeaders("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
        ObjectHttpUndefindable,
    )(typia.http.createAssertHeaders<ObjectHttpUndefindable>());
