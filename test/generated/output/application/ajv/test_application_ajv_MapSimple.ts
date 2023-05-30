import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { MapSimple } from "../../../../structures/MapSimple";
export const test_application_ajv_MapSimple = _test_application("ajv")("MapSimple", typia.application<[
    MapSimple
], "ajv">());
