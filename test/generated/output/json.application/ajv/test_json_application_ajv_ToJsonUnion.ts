import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonUnion } from "../../../../structures/ToJsonUnion";

export const test_json_application_ajv_ToJsonUnion = _test_json_application(
    "ajv",
)("ToJsonUnion")({
    schemas: [
        {
            $ref: "#/components/schemas/ToJsonUnion",
        },
    ],
    components: {
        schemas: {
            ToJsonUnion: {
                $id: "#/components/schemas/ToJsonUnion",
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "boolean",
                        },
                        {
                            $ref: "#/components/schemas/ToJsonUnion.ICitizen",
                        },
                        {
                            $ref: "#/components/schemas/ToJsonUnion.IProduct",
                        },
                        {
                            type: "string",
                        },
                        {
                            type: "number",
                        },
                        {
                            $ref: "#/components/schemas/ToJsonUnion.ICitizen",
                        },
                    ],
                },
            },
            "ToJsonUnion.ICitizen": {
                $id: "#/components/schemas/ToJsonUnion.ICitizen",
                type: "object",
                properties: {
                    id: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    mobile: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                required: ["id", "mobile", "name"],
                "x-typia-jsDocTags": [],
            },
            "ToJsonUnion.IProduct": {
                $id: "#/components/schemas/ToJsonUnion.IProduct",
                type: "object",
                properties: {
                    manufacturer: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    brand: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                required: ["manufacturer", "brand", "name"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
