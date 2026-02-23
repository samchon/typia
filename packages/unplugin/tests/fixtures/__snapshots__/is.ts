import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import typia from 'typia';
import type { IMember } from './type.js';
const is = (() => { const _io0 = (input: any): boolean => "string" === typeof input.email && __typia_transform__isFormatEmail._isFormatEmail(input.email) && ("string" === typeof input.id && __typia_transform__isFormatUuid._isFormatUuid(input.id)) && ("number" === typeof input.age && (__typia_transform__isTypeUint32._isTypeUint32(input.age) && 19 < input.age && input.age <= 100)); return (input: any): input is IMember => "object" === typeof input && null !== input && _io0(input); })();
is({});
