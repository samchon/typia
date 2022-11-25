import TSON from "../../../../src";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectDynamic = _test_application(
    "swagger",
)("ObjectDynamic", TSON.application<[ObjectDynamic], "swagger">(), {
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
                            "x-tson-required": true,
                        },
                        {
                            type: "number",
                            nullable: false,
                            "x-tson-required": true,
                        },
                        {
                            type: "boolean",
                            nullable: false,
                            "x-tson-required": true,
                        },
                    ],
                    "x-tson-required": true,
                },
                nullable: false,
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
