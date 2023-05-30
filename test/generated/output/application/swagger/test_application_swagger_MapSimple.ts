import typia from "typia";
import { _test_application } from "../../../../internal/_test_application";
import { MapSimple } from "../../../../structures/MapSimple";
export const test_application_swagger_MapSimple = _test_application("swagger")("MapSimple", typia.application<[
    MapSimple
], "swagger">());
