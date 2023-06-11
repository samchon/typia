import typia from "typia";
import { TupleRestArray } from "../../../../structures/TupleRestArray";
import { _test_application } from "../../../../internal/_test_application";
export const test_application_ajv_TupleRestArray = _test_application("ajv")("TupleRestArray", typia.application<[
    TupleRestArray
], "ajv">());
