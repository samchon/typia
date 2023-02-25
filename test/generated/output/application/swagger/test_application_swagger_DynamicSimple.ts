import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_DynamicSimple = _test_application("swagger")("DynamicSimple", typia.application<[
    DynamicSimple
], "swagger">());
