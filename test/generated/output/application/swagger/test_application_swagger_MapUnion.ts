import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { MapUnion } from "../../../../structures/MapUnion";
export const test_application_swagger_MapUnion = _test_application("swagger")("MapUnion", typia.application<[
    MapUnion
], "swagger">());
