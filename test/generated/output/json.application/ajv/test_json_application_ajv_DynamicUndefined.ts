import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { DynamicUndefined } from "../../../../structures/DynamicUndefined";

export const test_json_application_ajv_DynamicUndefined =
    _test_json_application("ajv")("DynamicUndefined")({
        schemas: [
            {
                $ref: "#/components/schemas/DynamicUndefined",
            },
        ],
        components: {
            schemas: {
                DynamicUndefined: {
                    $id: "#/components/schemas/DynamicUndefined",
                    type: "object",
                    properties: {},
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
    });
