import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_createValidateStringify_TupleRestAtomic =
  _test_json_validateStringify("TupleRestAtomic")<TupleRestAtomic>(
    TupleRestAtomic,
  )(typia.json.createValidateStringify<TupleRestAtomic>());
