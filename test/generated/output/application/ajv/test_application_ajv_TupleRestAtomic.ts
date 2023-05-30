import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";
export const test_application_ajv_TupleRestAtomic = _test_application("ajv")("TupleRestAtomic", typia.application<[
    TupleRestAtomic
], "ajv">());
