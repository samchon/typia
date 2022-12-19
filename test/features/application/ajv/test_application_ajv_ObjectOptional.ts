import typia from "../../../../src";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ObjectOptional = 
    _test_application("ajv")(
        "ObjectOptional",
        typia.application<[ObjectOptional], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/ObjectOptional"
        }
    ],
    components: {
        schemas: {
            ObjectOptional: {
                $id: "components#/schemas/ObjectOptional",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    email: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": false
                    },
                    sequence: {
                        type: "number",
                        nullable: false,
                        "x-typia-required": false
                    }
                },
                nullable: false,
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);