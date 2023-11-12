import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { TupleRestObject } from "../../../../structures/TupleRestObject";

export const test_json_application_swagger_TupleRestObject =
    _test_json_application("swagger")("TupleRestObject")({
        schemas: [
            {
                $ref: "#/components/schemas/TupleRestObject",
            },
        ],
        components: {
            schemas: {
                TupleRestObject: {
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
                    type: "object",
                    properties: {
                        value: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
