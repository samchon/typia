import TSON from "../../../../src";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectOptional = _test_application(
    "swagger",
)("ObjectOptional", TSON.application<[ObjectOptional], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectOptional",
        },
    ],
    components: {
        schemas: {
            ObjectOptional: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    email: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": false,
                    },
                    sequence: {
                        type: "number",
                        nullable: false,
                        "x-tson-required": false,
                    },
                },
                nullable: false,
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
