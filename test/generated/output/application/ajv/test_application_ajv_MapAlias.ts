import typia from "typia";
import { MapAlias } from "../../../structures/MapAlias";
import { _test_application } from "../../internal/_test_application";
export const test_application_ajv_MapAlias = _test_application("ajv")("MapAlias", typia.application<[
    MapAlias
], "ajv">());
