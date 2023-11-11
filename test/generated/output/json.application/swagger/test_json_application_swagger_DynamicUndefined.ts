import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";

export const test_json_application_swagger_DynamicUndefined =
    _test_json_application("swagger")("DynamicUndefined")({
        schemas: [
            {
                $ref: "#/components/schemas/DynamicUndefined",
            },
        ],
        components: {
            schemas: {
                DynamicUndefined: {
                    type: "object",
                    properties: {},
                    nullable: false,
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
