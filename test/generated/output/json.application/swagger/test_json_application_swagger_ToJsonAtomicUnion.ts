import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ToJsonAtomicUnion } from "../../../../structures/ToJsonAtomicUnion";

export const test_json_application_swagger_ToJsonAtomicUnion =
    _test_json_application("swagger")("ToJsonAtomicUnion")({
        schemas: [
            {
                $ref: "#/components/schemas/ToJsonAtomicUnion",
            },
        ],
        components: {
            schemas: {
                ToJsonAtomicUnion: {
                    type: "array",
                    items: {
                        oneOf: [
                            {
                                type: "string",
                                nullable: true,
                            },
                            {
                                type: "number",
                                nullable: true,
                            },
                            {
                                type: "boolean",
                                nullable: true,
                            },
                        ],
                    },
                },
            },
        },
        purpose: "swagger",
    });
