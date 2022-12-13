export interface TestFeature {
    method: string;
    creatable: boolean;
    spoilable: boolean;
    jsonable?: true;
    strict?: true;
    explicit?: true;
    primitive?: true;
}
export namespace TestFeature {
    export const DATA: TestFeature[] = [
        // VALIDATORS
        {
            method: "is",
            creatable: true,
            spoilable: true,
        },
        {
            method: "assert",
            creatable: true,
            spoilable: true,
        },
        {
            method: "validate",
            creatable: true,
            spoilable: true,
        },

        // STRICT VALIDATORS
        {
            method: "equals",
            creatable: true,
            spoilable: false,
            strict: true,
        },
        {
            method: "assertEquals",
            creatable: true,
            spoilable: false,
            strict: true,
        },
        {
            method: "validateEquals",
            creatable: true,
            spoilable: false,
            strict: true,
        },

        // PARSERS
        {
            method: "isParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },
        {
            method: "assertParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },
        {
            method: "validateParse",
            creatable: true,
            spoilable: true,
            jsonable: true,
            explicit: true,
            primitive: true,
        },

        // STRINGIFY
        {
            method: "stringify",
            creatable: true,
            spoilable: false,
            jsonable: true,
        },
        {
            method: "isStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "assertStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
        {
            method: "validateStringify",
            creatable: true,
            spoilable: true,
            jsonable: true,
        },
    ];
}
