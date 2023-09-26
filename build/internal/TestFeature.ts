export interface TestFeature {
    module: string | null;
    method: string;
    creatable: boolean;
    spoilable: boolean;
    query?: true;
    headers?: true;
    jsonable?: true;
    primitive?: true;
    resolved?: true;
    strict?: true;
    explicit?: true;
    random?: true;
    opposite?: Array<{
        name: string;
        method: string;
    }>;
}
export namespace TestFeature {
    export const DATA: TestFeature[] = [
        //----
        // RUNTIME VALIDATORS
        //----
        // VALIDATORS
        {
            module: null,
            method: "is",
            creatable: true,
            spoilable: true,
        },
        {
            module: null,
            method: "assert",
            creatable: true,
            spoilable: true,
        },
        {
            module: null,
            method: "validate",
            creatable: true,
            spoilable: true,
        },

        // STRICT VALIDATORS
        {
            module: null,
            method: "equals",
            creatable: true,
            spoilable: false,
            strict: true,
        },
        {
            module: null,
            method: "assertEquals",
            creatable: true,
            spoilable: false,
            strict: true,
        },
        {
            module: null,
            method: "validateEquals",
            creatable: true,
            spoilable: false,
            strict: true,
        },

        // RANDOM
        {
            module: null,
            method: "random",
            creatable: true,
            spoilable: false,
            random: true,
            resolved: true,
            opposite: [
                {
                    name: "assert",
                    method: "typia.createAssert",
                },
            ],
        },

        //----
        // PROTOBUF FUNCTIONS
        //----
        // ENCODERS
        {
            module: "protobuf",
            method: "encode",
            creatable: true,
            spoilable: false,
            resolved: true,
            opposite: [
                {
                    name: "message",
                    method: "typia.protobuf.message",
                },
                {
                    name: "decode",
                    method: "typia.protobuf.createDecode",
                },
            ],
        },
        {
            module: "protobuf",
            method: "isEncode",
            creatable: true,
            spoilable: true,
            resolved: true,
            opposite: [
                {
                    name: "message",
                    method: "typia.protobuf.message",
                },
                {
                    name: "decode",
                    method: "typia.protobuf.createDecode",
                },
            ],
        },
        {
            module: "protobuf",
            method: "assertEncode",
            creatable: true,
            spoilable: true,
            resolved: true,
            opposite: [
                {
                    name: "message",
                    method: "typia.protobuf.message",
                },
                {
                    name: "decode",
                    method: "typia.protobuf.createDecode",
                },
            ],
        },
        {
            module: "protobuf",
            method: "validateEncode",
            creatable: true,
            spoilable: true,
            resolved: true,
            opposite: [
                {
                    name: "message",
                    method: "typia.protobuf.message",
                },
                {
                    name: "decode",
                    method: "typia.protobuf.createDecode",
                },
            ],
        },
        // DECODERS
        {
            module: "protobuf",
            method: "decode",
            creatable: true,
            spoilable: false,
            resolved: true,
            opposite: [
                {
                    name: "encode",
                    method: "typia.protobuf.createEncode",
                },
            ],
        },
        {
            module: "protobuf",
            method: "isDecode",
            creatable: true,
            spoilable: true,
            resolved: true,
            opposite: [
                {
                    name: "encode",
                    method: "typia.protobuf.createEncode",
                },
            ],
        },
        {
            module: "protobuf",
            method: "assertDecode",
            creatable: true,
            spoilable: true,
            resolved: true,
            opposite: [
                {
                    name: "encode",
                    method: "typia.protobuf.createEncode",
                },
            ],
        },
        {
            module: "protobuf",
            method: "validateDecode",
            creatable: true,
            spoilable: true,
            resolved: true,
            opposite: [
                {
                    name: "encode",
                    method: "typia.protobuf.createEncode",
                },
            ],
        },

        //----
        // JSON FUNCTIONS
        //----
        // PARSERS
        {
            module: "json",
            method: "isParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            primitive: true,
            explicit: true,
        },
        {
            module: "json",
            method: "assertParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            primitive: true,
            explicit: true,
        },
        {
            module: "json",
            method: "validateParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
            resolved: true,
        },

        // STRINGIFY
        {
            module: "json",
            method: "stringify",
            creatable: true,
            spoilable: false,
            jsonable: true,
        },
        {
            module: "json",
            method: "isStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            module: "json",
            method: "assertStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            module: "json",
            method: "validateStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },

        //----
        // HTTP
        //----
        {
            module: "http",
            method: "query",
            creatable: true,
            query: true,
            resolved: true,
            spoilable: false,
        },
        {
            module: "http",
            method: "assertQuery",
            creatable: true,
            query: true,
            resolved: true,
            spoilable: true,
        },
        {
            module: "http",
            method: "isQuery",
            creatable: true,
            query: true,
            resolved: true,
            spoilable: true,
        },
        {
            module: "http",
            method: "validateQuery",
            creatable: true,
            query: true,
            resolved: true,
            spoilable: true,
        },
        {
            module: "http",
            method: "headers",
            creatable: true,
            headers: true,
            resolved: true,
            spoilable: false,
        },
        {
            module: "http",
            method: "assertHeaders",
            creatable: true,
            headers: true,
            resolved: true,
            spoilable: true,
        },
        {
            module: "http",
            method: "isHeaders",
            creatable: true,
            headers: true,
            resolved: true,
            spoilable: true,
        },
        {
            module: "http",
            method: "validateHeaders",
            creatable: true,
            headers: true,
            resolved: true,
            spoilable: true,
        },

        //----
        // MISCELLANEOUS
        //----
        {
            module: "misc",
            method: "clone",
            creatable: true,
            spoilable: false,
            jsonable: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "isClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "assertClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "validateClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "prune",
            creatable: true,
            spoilable: false,
            strict: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "isPrune",
            creatable: true,
            spoilable: true,
            strict: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "assertPrune",
            creatable: true,
            spoilable: true,
            strict: true,
            resolved: true,
        },
        {
            module: "misc",
            method: "validatePrune",
            creatable: true,
            spoilable: true,
            strict: true,
            resolved: true,
        },
    ];
}
