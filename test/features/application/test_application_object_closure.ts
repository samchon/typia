import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_application } from "./_test_application";

export const test_application_object_closure = _test_application(
    "closured object",
    TSON.application<[ObjectClosure]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectClosure.IRecord",
            },
        ],
        components: {
            schemas: {
                "ObjectClosure.IRecord": {
                    $id: "ObjectClosure.IRecord",
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            nullable: false,
                        },
                    },
                    nullable: false,
                    required: ["ObjectClosure.IRecord"],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
