import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { SetAlias } from "../../../../structures/SetAlias";
export const test_application_swagger_SetAlias = _test_application("swagger")("SetAlias", typia.application<[
    SetAlias
], "swagger">());
