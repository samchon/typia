"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeGuardError = void 0;
class TypeGuardError extends Error {
    method;
    path;
    expected;
    value;
    constructor(props) {
        // MESSAGE CONSTRUCTION
        super(props.message ||
            `Error on ${props.method}(): invalid type${props.path ? ` on ${props.path}` : ""}, expect to be ${props.expected}`);
        // INHERITANCE POLYFILL
        const proto = new.target.prototype;
        if (Object.setPrototypeOf)
            Object.setPrototypeOf(this, proto);
        else
            this.__proto__ = proto;
        // ASSIGN MEMBERS
        this.method = props.method;
        this.path = props.path;
        this.expected = props.expected;
        this.value = props.value;
    }
}
exports.TypeGuardError = TypeGuardError;
