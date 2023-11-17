import typia from "../../../src";
import { _test_http_isQuery } from "../../internal/_test_http_isQuery";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_http_createIsQuery_ObjectHttpUndefindable =
  _test_http_isQuery("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.http.createIsQuery<ObjectHttpUndefindable>());
