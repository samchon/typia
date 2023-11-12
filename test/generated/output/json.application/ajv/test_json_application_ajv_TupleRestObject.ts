import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";

export const test_json_application_ajv_TupleRestObject = _test_json_application(
    "ajv",
)("TupleRestObject")({
    schemas: [
        {
            $ref: "#/components/schemas/TupleRestObject",
        },
    ],
    components: {
        schemas: {
            TupleRestObject: {
                $id: "#/components/schemas/TupleRestObject",
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "boolean",
                        },
                        {
                            type: "number",
                        },
                        {
                            $ref: "#/components/schemas/TupleRestObject.IObject",
                        },
                    ],
                },
                minItems: 2,
                "x-typia-tuple": {
                    type: "array",
                    items: [
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            $ref: "#/components/schemas/TupleRestObject.IObject",
                        },
                    ],
                    minItems: 2,
                },
            },
            "TupleRestObject.IObject": {
                $id: "#/components/schemas/TupleRestObject.IObject",
                type: "object",
                properties: {
                    value: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                required: ["value"],
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
});
