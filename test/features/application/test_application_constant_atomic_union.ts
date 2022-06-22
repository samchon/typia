import TSON from "../../../src";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";
import { _test_application } from "./_test_application";

export const test_application_constant_atomic_union = _test_application(
    "constant atomic",
    TSON.application<[ConstantAtomicUnion]>(),
{schemas: [
        {
            type: "array",
            $type: "array",
            items: {
                $type: "oneOf",
                oneOf: [
                    {
                        $type: "enum",
                        "enum": [
                            false
                        ],
                        nullable: false
                    },
                    {
                        $type: "enum",
                        "enum": [
                            2,
                            1
                        ],
                        nullable: false
                    },
                    {
                        $type: "enum",
                        "enum": [
                            "three",
                            "four"
                        ],
                        nullable: false
                    },
                    {
                        $type: "reference",
                        $ref: "#/components/schemas/__type"
                    }
                ]
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            __type: {
                $id: "__type",
                $type: "object",
                type: "object",
                properties: {
                    key: {
                        $type: "enum",
                        "enum": [
                            "key"
                        ],
                        nullable: false
                    }
                },
                nullable: false,
                required: [
                    "key"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);