import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__randomFormatEmail from "typia/lib/internal/_randomFormatEmail.js";
import * as __typia_transform__randomFormatUuid from "typia/lib/internal/_randomFormatUuid.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";
import * as __typia_transform__createStandardSchema from "typia/lib/internal/_createStandardSchema.js";
import type { IMember } from '@/type.js';
import typia from 'typia';
const is = (() => { const _io0 = (input: any): boolean => "string" === typeof input.email && __typia_transform__isFormatEmail._isFormatEmail(input.email) && ("string" === typeof input.id && __typia_transform__isFormatUuid._isFormatUuid(input.id)) && ("number" === typeof input.age && (__typia_transform__isTypeUint32._isTypeUint32(input.age) && 19 < input.age && input.age <= 100)); return (input: any): input is IMember => "object" === typeof input && null !== input && _io0(input); })();
const random = (() => { const _ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
    email: (_generator?.email ?? __typia_transform__randomFormatEmail._randomFormatEmail)(),
    id: (_generator?.uuid ?? __typia_transform__randomFormatUuid._randomFormatUuid)(),
    age: (_generator?.integer ?? __typia_transform__randomInteger._randomInteger)({
        type: "integer",
        minimum: 0,
        exclusiveMinimum: 19,
        maximum: 100
    })
}); let _generator: Partial<import("typia").IRandomGenerator> | undefined; return (generator?: Partial<import("typia").IRandomGenerator>): import("typia").Resolved<IMember> => {
    _generator = generator;
    return _ro0();
}; })();
const validate = (() => { const _io0 = (input: any): boolean => "string" === typeof input.email && __typia_transform__isFormatEmail._isFormatEmail(input.email) && ("string" === typeof input.id && __typia_transform__isFormatUuid._isFormatUuid(input.id)) && ("number" === typeof input.age && (__typia_transform__isTypeUint32._isTypeUint32(input.age) && 19 < input.age && input.age <= 100)); const _vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.email && (__typia_transform__isFormatEmail._isFormatEmail(input.email) || _report(_exceptionable, {
        path: _path + ".email",
        expected: "string & Format<\"email\">",
        value: input.email
    })) || _report(_exceptionable, {
        path: _path + ".email",
        expected: "(string & Format<\"email\">)",
        value: input.email
    }), "string" === typeof input.id && (__typia_transform__isFormatUuid._isFormatUuid(input.id) || _report(_exceptionable, {
        path: _path + ".id",
        expected: "string & Format<\"uuid\">",
        value: input.id
    })) || _report(_exceptionable, {
        path: _path + ".id",
        expected: "(string & Format<\"uuid\">)",
        value: input.id
    }), "number" === typeof input.age && (__typia_transform__isTypeUint32._isTypeUint32(input.age) || _report(_exceptionable, {
        path: _path + ".age",
        expected: "number & Type<\"uint32\">",
        value: input.age
    })) && (19 < input.age || _report(_exceptionable, {
        path: _path + ".age",
        expected: "number & ExclusiveMinimum<19>",
        value: input.age
    })) && (input.age <= 100 || _report(_exceptionable, {
        path: _path + ".age",
        expected: "number & Maximum<100>",
        value: input.age
    })) || _report(_exceptionable, {
        path: _path + ".age",
        expected: "(number & Type<\"uint32\"> & ExclusiveMinimum<19> & Maximum<100>)",
        value: input.age
    })].every((flag: boolean) => flag); const __is = (input: any): input is IMember => "object" === typeof input && null !== input && _io0(input); let errors: any; let _report: any; return __typia_transform__createStandardSchema._createStandardSchema((input: any): import("typia").IValidation<IMember> => {
    if (false === __is(input)) {
        errors = [];
        _report = (__typia_transform__validateReport._validateReport as any)(errors);
        ((input: any, _path: string, _exceptionable: boolean = true) => ("object" === typeof input && null !== input || _report(true, {
            path: _path + "",
            expected: "IMember",
            value: input
        })) && _vo0(input, _path + "", true) || _report(true, {
            path: _path + "",
            expected: "IMember",
            value: input
        }))(input, "$input", true);
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
