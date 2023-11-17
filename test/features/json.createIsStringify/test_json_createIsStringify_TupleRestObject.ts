import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createIsStringify_TupleRestObject =
  _test_json_isStringify("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.json.createIsStringify<TupleRestObject>(),
  );
