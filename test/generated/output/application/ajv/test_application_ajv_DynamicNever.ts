import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_DynamicNever = _test_application("ajv")("DynamicNever", typia.application<[
    DynamicNever
], "ajv">());
