import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport";
import * as __typia_transform__createStandardSchema from "typia/lib/internal/_createStandardSchema";
import type { IMember } from '@/type.js';
import typia from 'typia';
const is = (() => { return (input: any): input is IMember => true; })();
const random = (() => { let _generator: Partial<import("typia").IRandomGenerator> | undefined; return (generator?: Partial<import("typia").IRandomGenerator>): import("typia").Resolved<IMember> => {
    _generator = generator;
    return "any type used...";
}; })();
const validate = (() => { const __is = (input: any): input is IMember => true; let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<IMember> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => true)(input, "$input", true);
        const success = 0 === errors.length;
        return success ? {
            success,
            data: input
        } : {
            success,
            errors,
            data: input
        } as any;
    }
    return {
        success: true,
        data: input
    } as any;
}); })();
is({});
validate({});
random();
