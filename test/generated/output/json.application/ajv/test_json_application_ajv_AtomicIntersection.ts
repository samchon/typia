import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicIntersection } from "../../../../structures/AtomicIntersection";

export const test_json_application_ajv_AtomicIntersection =
    _test_json_application("ajv")("AtomicIntersection")({
        schemas: [
            {
                $ref: "#/components/schemas/AtomicIntersection",
            },
        ],
        components: {
            schemas: {
                AtomicIntersection: {
                    $id: "#/components/schemas/AtomicIntersection",
                    type: "array",
                    items: [
                        {
                            $ref: "#/components/schemas/AtomicIntersection.Wrapperboolean",
                        },
                        {
                            $ref: "#/components/schemas/AtomicIntersection.Wrappernumber",
                        },
                        {
                            $ref: "#/components/schemas/AtomicIntersection.Wrapperstring",
                        },
                    ],
                    minItems: 3,
                    maxItems: 3,
                },
                "AtomicIntersection.Wrapperboolean": {
                    $id: "#/components/schemas/AtomicIntersection.Wrapperboolean",
                    type: "boolean",
                },
                "AtomicIntersection.Wrappernumber": {
                    $id: "#/components/schemas/AtomicIntersection.Wrappernumber",
                    type: "number",
                },
                "AtomicIntersection.Wrapperstring": {
                    $id: "#/components/schemas/AtomicIntersection.Wrapperstring",
                    type: "string",
                },
            },
        },
        purpose: "ajv",
    });
