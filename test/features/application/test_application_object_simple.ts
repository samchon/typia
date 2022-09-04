import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_application } from "./_test_application";

export const test_application_object = _test_application(
    "simple object",
    TSON.application<[ObjectSimple]>(),
    {
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
                },
                "ObjectSimple.IPoint3D": {
                    type: "object",
                    properties: {
                        x: {
                            type: "number",
                            nullable: false,
                        },
                        y: {
                            type: "number",
                            nullable: false,
                        },
                        z: {
                            type: "number",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["x", "y", "z"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
