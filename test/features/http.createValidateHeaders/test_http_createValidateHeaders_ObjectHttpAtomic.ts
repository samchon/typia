import typia from "../../../src";
import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_http_createValidateHeaders_ObjectHttpAtomic =
    _test_http_validateHeaders("ObjectHttpAtomic")<ObjectHttpAtomic>(
        ObjectHttpAtomic,
    )(typia.http.createValidateHeaders<ObjectHttpAtomic>());
