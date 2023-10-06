import typia from "../../../src";
import { _test_http_assertQuery } from "../../internal/_test_http_assertQuery";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_http_createAssertQuery_ObjectHttpConstant =
    _test_http_assertQuery("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )(typia.http.createAssertQuery<ObjectHttpConstant>());
