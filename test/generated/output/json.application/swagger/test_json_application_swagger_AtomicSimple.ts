import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";

export const test_json_application_swagger_AtomicSimple =
    _test_json_application("swagger")("AtomicSimple")({
        schemas: [
            {
                $ref: "#/components/schemas/AtomicSimple",
            },
        ],
        components: {
            schemas: {
                AtomicSimple: {
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
                    minItems: 3,
                    maxItems: 3,
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
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                            },
                        ],
                        minItems: 3,
                        maxItems: 3,
                    },
                },
            },
        },
        purpose: "swagger",
    });
