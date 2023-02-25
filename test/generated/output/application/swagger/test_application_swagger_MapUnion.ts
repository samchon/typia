import typia from "typia";
import { MapUnion } from "../../../structures/MapUnion";
import { _test_application } from "../../internal/_test_application";
export const test_application_swagger_MapUnion = _test_application("swagger")("MapUnion", typia.application<[
    MapUnion
], "swagger">());
