import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";
export const test_application_ajv_TupleRestObject = _test_application("ajv")("TupleRestObject", typia.application<[
    TupleRestObject
], "ajv">());
