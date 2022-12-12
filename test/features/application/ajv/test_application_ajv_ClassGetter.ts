import TSON from "../../../../src";
import { ClassGetter } from "../../../structures/ClassGetter";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_ClassGetter = 
    _test_application("ajv")(
        "ClassGetter",
        TSON.application<[ClassGetter], "ajv">(),{schemas: [
        {
            $ref: "components#/schemas/ClassGetter.Person"
        }
    ],
    components: {
        schemas: {
            "ClassGetter.Person": {
                $id: "components#/schemas/ClassGetter.Person",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    dead: {
                        type: "boolean",
                        nullable: true,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "dead"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);