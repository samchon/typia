import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTree } from "../../../../structures/DynamicTree";
export const test_application_swagger_DynamicTree = _test_application("swagger")("DynamicTree", typia.application<[
    DynamicTree
], "swagger">());
