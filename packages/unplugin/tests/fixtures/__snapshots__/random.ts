import * as __typia_transform__randomFormatEmail from "typia/lib/internal/_randomFormatEmail.js";
import * as __typia_transform__randomFormatUuid from "typia/lib/internal/_randomFormatUuid.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import typia from 'typia';
import type { IMember } from './type.js';
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
random();
