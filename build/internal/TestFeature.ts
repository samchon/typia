export interface TestFeature {
    module: string | null;
    method: string;
    creatable: boolean;
    spoilable: boolean;
    jsonable?: true;
    strict?: true;
    explicit?: true;
    primitive?: true;
    random?: true;
    opposite?: {
        name: string;
        method: string;
    };
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
            primitive: true,
            random: true,
            opposite: {
                name: "assert",
                method: "typia.createAssert",
            },
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
            opposite: {
                name: "message",
                method: "typia.protobuf.message",
            },
        },
        {
            module: "protobuf",
            method: "isEncode",
            creatable: true,
            spoilable: true,
            opposite: {
                name: "message",
                method: "typia.protobuf.message",
            },
        },
        {
            module: "protobuf",
            method: "assertEncode",
            creatable: true,
            spoilable: true,
            opposite: {
                name: "message",
                method: "typia.protobuf.message",
            },
        },
        {
            module: "protobuf",
            method: "validateEncode",
            creatable: true,
            spoilable: true,
            opposite: {
                name: "message",
                method: "typia.protobuf.message",
            },
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
            explicit: true,
            primitive: true,
        },
        {
            module: "json",
            method: "assertParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },
        {
            module: "json",
            method: "validateParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
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
        // MISCELLANEOUS
        //----
        {
            module: "misc",
            method: "clone",
            creatable: true,
            spoilable: false,
            jsonable: true,
        },
        {
            module: "misc",
            method: "isClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            module: "misc",
            method: "assertClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            module: "misc",
            method: "validateClone",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            module: "misc",
            method: "prune",
            creatable: true,
            spoilable: false,
            strict: true,
            primitive: true,
        },
        {
            module: "misc",
            method: "isPrune",
            creatable: true,
            spoilable: true,
            strict: true,
            primitive: true,
        },
        {
            module: "misc",
            method: "assertPrune",
            creatable: true,
            spoilable: true,
            strict: true,
            primitive: true,
        },
        {
            module: "misc",
            method: "validatePrune",
            creatable: true,
            spoilable: true,
            strict: true,
            primitive: true,
        },
    ];
}
