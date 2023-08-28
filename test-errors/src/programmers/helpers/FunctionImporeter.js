"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionImporter = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
class FunctionImporter {
    method;
    used_ = new Set();
    local_ = new Set();
    unions_ = new Map();
    sequence_ = 0;
    constructor(method) {
        this.method = method;
    }
    empty() {
        return this.used_.size === 0;
    }
    use(name) {
        this.used_.add(name);
        return typescript_1.default.factory.createIdentifier("$" + name);
    }
    useLocal(name) {
        this.local_.add(name);
        return name;
    }
    hasLocal(name) {
        return this.local_.has(name);
    }
    declare(modulo, includeUnions = true) {
        return [
            ...[...this.used_].map((name) => StatementFactory_1.StatementFactory.constant("$" + name, IdentifierFactory_1.IdentifierFactory.access(typescript_1.default.factory.createParenthesizedExpression(typescript_1.default.factory.createAsExpression(modulo, TypeFactory_1.TypeFactory.keyword("any"))))(name))),
            ...(includeUnions === true
                ? [...this.unions_.values()].map(([key, arrow]) => StatementFactory_1.StatementFactory.constant(key, arrow))
                : []),
        ];
    }
    declareUnions() {
        return [...this.unions_.values()].map(([key, arrow]) => StatementFactory_1.StatementFactory.constant(key, arrow));
    }
    increment() {
        return ++this.sequence_;
    }
    emplaceUnion(prefix, name, factory) {
        const oldbie = this.unions_.get(name);
        if (oldbie)
            return oldbie[0];
        const index = this.unions_.size;
        const accessor = `${prefix}p${index}`;
        const tuple = [accessor, null];
        this.unions_.set(name, tuple);
        tuple[1] = factory();
        return accessor;
    }
    trace() {
        console.log(...this.used_);
        console.log(...this.local_);
    }
}
exports.FunctionImporter = FunctionImporter;
