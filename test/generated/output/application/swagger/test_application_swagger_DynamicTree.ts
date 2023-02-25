import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_DynamicTree = _test_application("swagger")("DynamicTree", typia.application<[
    DynamicTree
], "swagger">());
