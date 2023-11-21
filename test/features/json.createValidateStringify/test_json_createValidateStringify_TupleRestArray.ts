import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_json_createValidateStringify_TupleRestArray =
  _test_json_validateStringify("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )(typia.json.createValidateStringify<TupleRestArray>());
