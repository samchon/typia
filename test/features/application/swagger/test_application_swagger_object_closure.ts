import TSON from "../../../../src";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { _test_application_swagger } from "./_test_application_swagger";

export const test_application_swagger_object_closure =
    _test_application_swagger(
        "closured object",
        TSON.application<[ObjectClosure], "swagger">(),
        {
            schemas: [
                {
                    $ref: "#/components/schemas/ObjectClosure.IRecord",
                },
            ],
            components: {
                schemas: {
                    "ObjectClosure.IRecord": {
                        type: "object",
                        properties: {
                            id: {
                                type: "string",
                                nullable: false,
                                "x-tson-required": true,
                            },
                        },
                        nullable: false,
                        required: ["id"],
                        "x-tson_jsDocTags": [],
                    },
                },
            },
            purpose: "swagger",
            prefix: "#/components/schemas",
        },
    );
