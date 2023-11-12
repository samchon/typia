import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectSimple } from "../../../../structures/ObjectSimple";

export const test_json_application_swagger_ObjectSimple =
    _test_json_application("swagger")("ObjectSimple")({
        schemas: [
            {
                $ref: "#/components/schemas/ObjectSimple.IBox3D",
            },
        ],
        components: {
            schemas: {
                "ObjectSimple.IBox3D": {
                    type: "object",
                    properties: {
                        scale: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                        position: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                        rotate: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                        pivot: {
                            $ref: "#/components/schemas/ObjectSimple.IPoint3D",
                        },
                    },
                    nullable: false,
                    required: ["scale", "position", "rotate", "pivot"],
                    "x-typia-jsDocTags": [],
                },
                "ObjectSimple.IPoint3D": {
                    type: "object",
                    properties: {
                        x: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        y: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        z: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "z"],
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
    });
