import typia from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectDynamic = _test_application(
    "swagger",
)("ObjectDynamic", typia.application<[ObjectDynamic], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectDynamic",
        },
    ],
    components: {
        schemas: {
            ObjectDynamic: {
                type: "object",
                properties: {},
                additionalProperties: {
                    oneOf: [
                        {
                            type: "string",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        {
                            type: "number",
                            nullable: false,
                            "x-typia-required": true,
                        },
                        {
                            type: "boolean",
                            nullable: false,
                            "x-typia-required": true,
                        },
                    ],
                    "x-typia-required": true,
                },
                nullable: false,
                "x-typia_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
