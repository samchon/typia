import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_json_validateStringify_TupleRestAtomic =
    _test_json_validateStringify("TupleRestAtomic")<TupleRestAtomic>(
        TupleRestAtomic,
    )(typia.json.createValidateStringify<TupleRestAtomic>());
