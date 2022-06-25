import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_application } from "./_test_application";

export const test_application_class_getter = _test_application(
    "class getter",
    TSON.application<[ClassGetter]>(),
{schemas: [
        {
            $ref: "#/components/schemas/ClassGetter.Person"
        }
    ],
    components: {
        schemas: {
            "ClassGetter.Person": {
                $id: "ClassGetter.Person",
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false
                    },
                    name: {
                        type: "string",
                        nullable: false
                    },
                    dead: {
                        "enum": [
                            false,
                            true
                        ],
                        nullable: true
                    }
                },
                nullable: false,
                required: [
                    "id",
                    "name",
                    "dead"
                ]
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);