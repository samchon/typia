"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespace = void 0;
const RandomGenerator_1 = require("../utils/RandomGenerator");
const TypeGuardError_1 = require("../TypeGuardError");
const _ProtobufReader_1 = require("./$ProtobufReader");
const _ProtobufSizer_1 = require("./$ProtobufSizer");
const _ProtobufWriter_1 = require("./$ProtobufWriter");
const _any_1 = require("./$any");
const _every_1 = require("./$every");
const _guard_1 = require("./$guard");
const _is_between_1 = require("./$is_between");
const _join_1 = require("./$join");
const _number_1 = require("./$number");
const _report_1 = require("./$report");
const _rest_1 = require("./$rest");
const _string_1 = require("./$string");
const _strlen_1 = require("./$strlen");
const _tail_1 = require("./$tail");
/**
 * @internal
 */
var Namespace;
(function (Namespace) {
    Namespace.is = () => ({
        is_between: _is_between_1.$is_between,
    });
    Namespace.assert = (method) => ({
        ...Namespace.is(),
        join: _join_1.$join,
        every: _every_1.$every,
        guard: (0, _guard_1.$guard)(`typia.${method}`),
        predicate: (matched, exceptionable, closure) => {
            if (matched === false && exceptionable === true)
                throw new TypeGuardError_1.TypeGuardError({
                    ...closure(),
                    method: `typia.${method}`,
                });
            return matched;
        },
    });
    Namespace.validate = () => ({
        ...Namespace.is(),
        join: _join_1.$join,
        report: _report_1.$report,
        predicate: (res) => (matched, exceptionable, closure) => {
            // CHECK FAILURE
            if (matched === false && exceptionable === true)
                (() => {
                    res.success &&= false;
                    const errorList = res.errors;
                    // TRACE ERROR
                    const error = closure();
                    if (errorList.length) {
                        const last = errorList[errorList.length - 1].path;
                        if (last.length >= error.path.length &&
                            last.substring(0, error.path.length) ===
                                error.path)
                            return;
                    }
                    errorList.push(error);
                    return;
                })();
            return matched;
        },
    });
    let json;
    (function (json) {
        json.stringify = (method) => ({
            ...Namespace.is(),
            number: _number_1.$number,
            string: _string_1.$string,
            tail: _tail_1.$tail,
            rest: _rest_1.$rest,
            throws: $throws(`json.${method}`),
        });
    })(json = Namespace.json || (Namespace.json = {}));
    let protobuf;
    (function (protobuf) {
        protobuf.decode = (method) => ({
            Reader: _ProtobufReader_1.$ProtobufReader,
            throws: $throws(`protobuf.${method}`),
        });
        protobuf.encode = (method) => ({
            Sizer: _ProtobufSizer_1.$ProtobufSizer,
            Writer: _ProtobufWriter_1.$ProtobufWriter,
            strlen: _strlen_1.$strlen,
            throws: $throws(method),
        });
    })(protobuf = Namespace.protobuf || (Namespace.protobuf = {}));
    let misc;
    (function (misc) {
        misc.clone = (method) => ({
            ...Namespace.is(),
            throws: $throws(`misc.${method}`),
            any: _any_1.$any,
        });
        misc.prune = (method) => ({
            ...Namespace.is(),
            throws: $throws(`misc.${method}`),
        });
    })(misc = Namespace.misc || (Namespace.misc = {}));
    Namespace.random = () => ({
        generator: RandomGenerator_1.RandomGenerator,
        pick: RandomGenerator_1.RandomGenerator.pick,
    });
    const $throws = (method) => (props) => {
        throw new TypeGuardError_1.TypeGuardError({
            ...props,
            method: `typia.${method}`,
        });
    };
})(Namespace || (exports.Namespace = Namespace = {}));
