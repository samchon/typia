import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { TupleHierarchical } from "../../../../structures/TupleHierarchical";
export const test_application_swagger_TupleHierarchical = _test_application("swagger")("TupleHierarchical", typia.application<[
    TupleHierarchical
], "swagger">());
