import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { MapUnion } from "../../../../structures/MapUnion";
export const test_application_ajv_MapUnion = _test_application("ajv")("MapUnion", typia.application<[
    MapUnion
], "ajv">());
