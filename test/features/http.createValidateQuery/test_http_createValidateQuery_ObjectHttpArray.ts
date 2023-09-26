import typia from "../../../src";
import { _test_http_validateQuery } from "../../internal/_test_http_validateQuery";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createValidateQuery_ObjectHttpArray =
    _test_http_validateQuery("ObjectHttpArray")<ObjectHttpArray>(
        ObjectHttpArray,
    )(typia.http.createValidateQuery<ObjectHttpArray>());
