import typia from "typia";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_ToJsonTuple = _test_application("ajv")("ToJsonTuple", typia.application<[
    ToJsonTuple
], "ajv">());
