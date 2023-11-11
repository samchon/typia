import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicClass } from "../../../../structures/AtomicClass";

export const test_json_application_swagger_AtomicClass = _test_json_application(
    "swagger",
)("AtomicClass")({
    schemas: [
        {
            $ref: "#/components/schemas/AtomicClass",
        },
    ],
    components: {
        schemas: {
            AtomicClass: {
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
                            type: "string",
                        },
                    ],
                },
                minItems: 9,
                maxItems: 9,
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
                            type: "boolean",
                        },
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
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    ],
                    minItems: 9,
                    maxItems: 9,
                },
            },
        },
    },
    purpose: "swagger",
});
