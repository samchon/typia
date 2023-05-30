import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TupleRestAtomic } from "../../../../structures/TupleRestAtomic";
export const test_application_swagger_TupleRestAtomic = _test_application("swagger")("TupleRestAtomic", typia.application<[
    TupleRestAtomic
], "swagger">());
