import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_application } from "./_test_application";

export const test_application_object = _test_application(
    "simple object",
    TSON.application<[ObjectSimple]>(),
{schemas: [
        {
            $type: "reference",
            $ref: "#/components/schemas/ObjectSimple.IBox3D"
        }
    ],
    components: {
        schemas: {
            "ObjectSimple.IBox3D": {
                $id: "ObjectSimple.IBox3D",
                $type: "object",
                type: "object",
                properties: {
                    scale: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectSimple.IPoint3D"
                    },
                    position: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectSimple.IPoint3D"
                    },
                    rotate: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectSimple.IPoint3D"
                    },
                    pivot: {
                        $type: "reference",
                        $ref: "#/components/schemas/ObjectSimple.IPoint3D"
                    }
                },
                nullable: false,
                required: [
                    "scale",
                    "position",
                    "rotate",
                    "pivot"
                ]
            },
            "ObjectSimple.IPoint3D": {
                $id: "ObjectSimple.IPoint3D",
                $type: "object",
                type: "object",
                properties: {
                    x: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    y: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    },
                    z: {
                        $type: "number",
                        type: "number",
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "x",
                    "y",
                    "z"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);