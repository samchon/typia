import typia from "../../../src";
import { _test_http_validateHeaders } from "../../internal/_test_http_validateHeaders";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_validateHeaders_ObjectHttpUndefindable =
  _test_http_validateHeaders("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.http.validateHeaders<ObjectHttpUndefindable>(input));
