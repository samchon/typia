import TSON from "../../../../src";
import { ClassClosure } from "../../../structures/ClassClosure";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ClassClosure = _test_application(
    "swagger",
)("ClassClosure", TSON.application<[ClassClosure], "swagger">(), {
    schemas: [
        {
            $ref: "#/components/schemas/ClassClosure.Something",
        },
    ],
    components: {
        schemas: {
            "ClassClosure.Something": {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        nullable: false,
                        "x-tson-required": true,
                    },
                    type: {
                        type: "string",
                        enum: ["something"],
                        nullable: false,
                        "x-tson-required": true,
                    },
                },
                nullable: false,
                required: ["id", "type"],
                "x-tson_jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
