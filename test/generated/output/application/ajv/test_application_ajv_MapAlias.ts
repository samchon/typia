import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { MapAlias } from "../../../../structures/MapAlias";
export const test_application_ajv_MapAlias = _test_application("ajv")("MapAlias", typia.application<[
    MapAlias
], "ajv">());
