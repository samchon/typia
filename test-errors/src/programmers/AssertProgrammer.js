"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../factories/IdentifierFactory");
const StatementFactory_1 = require("../factories/StatementFactory");
const TypeFactory_1 = require("../factories/TypeFactory");
const CheckerProgrammer_1 = require("./CheckerProgrammer");
const IsProgrammer_1 = require("./IsProgrammer");
const FunctionImporeter_1 = require("./helpers/FunctionImporeter");
const OptionPredicator_1 = require("./helpers/OptionPredicator");
const check_object_1 = require("./internal/check_object");
var AssertProgrammer;
(function (AssertProgrammer) {
    AssertProgrammer.write = (project) => (modulo) => (equals) => (type, name) => {
        const importer = new FunctionImporeter_1.FunctionImporter(modulo.getText());
        const is = IsProgrammer_1.IsProgrammer.write(project)(modulo, true)(equals)(type, name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type));
        const assert = CheckerProgrammer_1.CheckerProgrammer.write(project)({
            prefix: "$a",
            path: true,
            trace: true,
            numeric: OptionPredicator_1.OptionPredicator.numeric(project.options),
            equals,
            atomist: (explore) => (entry) => (input) => [
                ...(entry.expression ? [entry.expression] : []),
                ...(entry.conditions.length === 0
                    ? []
                    : entry.conditions.length === 1
                        ? entry.conditions[0].map((cond) => typescript_1.default.factory.createLogicalOr(cond.expression, create_guard_call(importer)(explore.from === "top"
                            ? typescript_1.default.factory.createTrue()
                            : typescript_1.default.factory.createIdentifier("_exceptionable"))(typescript_1.default.factory.createIdentifier(explore.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path"), cond.expected, input)))
                        : [
                            typescript_1.default.factory.createLogicalOr(entry.conditions
                                .map((set) => set
                                .map((s) => s.expression)
                                .reduce((a, b) => typescript_1.default.factory.createLogicalAnd(a, b)))
                                .reduce((a, b) => typescript_1.default.factory.createLogicalOr(a, b)), create_guard_call(importer)(explore.from === "top"
                                ? typescript_1.default.factory.createTrue()
                                : typescript_1.default.factory.createIdentifier("_exceptionable"))(typescript_1.default.factory.createIdentifier(explore.postfix
                                ? `_path + ${explore.postfix}`
                                : "_path"), entry.expected, input)),
                        ]),
            ].reduce((x, y) => typescript_1.default.factory.createLogicalAnd(x, y)),
            combiner: combiner(equals)(importer),
            joiner: joiner(equals)(importer),
            success: typescript_1.default.factory.createTrue(),
            addition: () => importer.declare(modulo),
        })(importer)(type, name);
        return typescript_1.default.factory.createArrowFunction(undefined, undefined, [
            IdentifierFactory_1.IdentifierFactory.parameter("input", TypeFactory_1.TypeFactory.keyword("any")),
        ], typescript_1.default.factory.createTypeReferenceNode(name ?? TypeFactory_1.TypeFactory.getFullName(project.checker)(type)), undefined, typescript_1.default.factory.createBlock([
            StatementFactory_1.StatementFactory.constant("__is", is),
            typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createFalse(), typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("__is"), undefined, [typescript_1.default.factory.createIdentifier("input")])), typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createCallExpression(assert, undefined, [
                typescript_1.default.factory.createIdentifier("input"),
                typescript_1.default.factory.createStringLiteral("$input"),
                typescript_1.default.factory.createTrue(),
            ])), undefined),
            typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier(`input`)),
        ], true));
    };
    const combiner = (equals) => (importer) => (explore) => {
        if (explore.tracable === false)
            return IsProgrammer_1.IsProgrammer.configure({
                object: assert_object(equals)(importer),
                numeric: true,
            })(importer).combiner(explore);
        const path = explore.postfix
            ? `_path + ${explore.postfix}`
            : "_path";
        return (logic) => (input, binaries, expected) => logic === "and"
            ? binaries
                .map((binary) => binary.combined
                ? binary.expression
                : typescript_1.default.factory.createLogicalOr(binary.expression, create_guard_call(importer)(explore.source === "top"
                    ? typescript_1.default.factory.createTrue()
                    : typescript_1.default.factory.createIdentifier("_exceptionable"))(typescript_1.default.factory.createIdentifier(path), expected, input)))
                .reduce(typescript_1.default.factory.createLogicalAnd)
            : typescript_1.default.factory.createLogicalOr(binaries
                .map((binary) => binary.expression)
                .reduce(typescript_1.default.factory.createLogicalOr), create_guard_call(importer)(explore.source === "top"
                ? typescript_1.default.factory.createTrue()
                : typescript_1.default.factory.createIdentifier("_exceptionable"))(typescript_1.default.factory.createIdentifier(path), expected, input));
        // : (() => {
        //       const addicted = binaries.slice();
        //       if (
        //           addicted[addicted.length - 1]!.combined === false
        //       ) {
        //           addicted.push({
        //               combined: true,
        //               expression: create_guard_call(importer)(
        //                   explore.source === "top"
        //                       ? ts.factory.createTrue()
        //                       : ts.factory.createIdentifier(
        //                             "_exceptionable",
        //                         ),
        //               )(
        //                   ts.factory.createIdentifier(path),
        //                   expected,
        //                   input,
        //               ),
        //           });
        //       }
        //       return addicted
        //           .map((b) => b.expression)
        //           .reduce(ts.factory.createLogicalOr);
        //   })();
    };
    const assert_object = (equals) => (importer) => (0, check_object_1.check_object)({
        equals,
        assert: true,
        undefined: true,
        reduce: typescript_1.default.factory.createLogicalAnd,
        positive: typescript_1.default.factory.createTrue(),
        superfluous: (value) => create_guard_call(importer)()(typescript_1.default.factory.createAdd(typescript_1.default.factory.createIdentifier("_path"), typescript_1.default.factory.createCallExpression(importer.use("join"), undefined, [typescript_1.default.factory.createIdentifier("key")])), "undefined", value),
        halt: (expr) => typescript_1.default.factory.createLogicalOr(typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createFalse(), typescript_1.default.factory.createIdentifier("_exceptionable")), expr),
    })(importer);
    const joiner = (equals) => (importer) => ({
        object: assert_object(equals)(importer),
        array: (input, arrow) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("every"), undefined, [arrow]),
        failure: (value, expected, explore) => create_guard_call(importer)(explore?.from === "top"
            ? typescript_1.default.factory.createTrue()
            : typescript_1.default.factory.createIdentifier("_exceptionable"))(typescript_1.default.factory.createIdentifier(explore?.postfix
            ? `_path + ${explore.postfix}`
            : "_path"), expected, value),
        full: equals
            ? undefined
            : (condition) => (input, expected, explore) => typescript_1.default.factory.createLogicalOr(condition, create_guard_call(importer)(explore.from === "top"
                ? typescript_1.default.factory.createTrue()
                : typescript_1.default.factory.createIdentifier("_exceptionable"))(typescript_1.default.factory.createIdentifier("_path"), expected, input)),
    });
    const create_guard_call = (importer) => (exceptionable) => (path, expected, value) => typescript_1.default.factory.createCallExpression(importer.use("guard"), undefined, [
        exceptionable ?? typescript_1.default.factory.createIdentifier("_exceptionable"),
        typescript_1.default.factory.createObjectLiteralExpression([
            typescript_1.default.factory.createPropertyAssignment("path", path),
            typescript_1.default.factory.createPropertyAssignment("expected", typescript_1.default.factory.createStringLiteral(expected)),
            typescript_1.default.factory.createPropertyAssignment("value", value),
        ], true),
    ]);
})(AssertProgrammer || (exports.AssertProgrammer = AssertProgrammer = {}));
