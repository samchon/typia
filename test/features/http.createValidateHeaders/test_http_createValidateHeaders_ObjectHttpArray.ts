import typia from "../../../src";
import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_http_createValidateHeaders_ObjectHttpArray =
  _test_http_validateHeaders("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )(typia.http.createValidateHeaders<ObjectHttpArray>());
