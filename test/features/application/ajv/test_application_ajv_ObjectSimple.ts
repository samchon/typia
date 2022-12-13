import typia from "../../../../src";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectSimple = _test_application("ajv")(
    "ObjectSimple",
    typia.application<[ObjectSimple], "ajv">(),
    {
        schemas: [
            {
                $ref: "components#/schemas/ObjectSimple.IBox3D",
            },
        ],
        components: {
            schemas: {
                "ObjectSimple.IBox3D": {
                    $id: "components#/schemas/ObjectSimple.IBox3D",
                    type: "object",
                    properties: {
                        scale: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                            "x-typia-required": true,
                        },
                        position: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                            "x-typia-required": true,
                        },
                        rotate: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                            "x-typia-required": true,
                        },
                        pivot: {
                            $ref: "components#/schemas/ObjectSimple.IPoint3D",
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["scale", "position", "rotate", "pivot"],
                    "x-typia_jsDocTags": [],
                },
                "ObjectSimple.IPoint3D": {
                    $id: "components#/schemas/ObjectSimple.IPoint3D",
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        z: {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "z"],
                    "x-typia_jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "components#/schemas",
    },
);
