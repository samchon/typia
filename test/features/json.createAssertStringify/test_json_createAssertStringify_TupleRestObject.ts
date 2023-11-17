import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createAssertStringify_TupleRestObject =
  _test_json_assertStringify("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )(typia.json.createAssertStringify<TupleRestObject>());
