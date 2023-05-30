import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestArray } from "../../../../structures/TupleRestArray";
export const test_application_swagger_TupleRestArray = _test_application("swagger")("TupleRestArray", typia.application<[
    TupleRestArray
], "swagger">());
