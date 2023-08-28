"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const ExpressionFactory_1 = require("../factories/ExpressionFactory");
const IdentifierFactory_1 = require("../factories/IdentifierFactory");
const TypeFactory_1 = require("../factories/TypeFactory");
const ValueFactory_1 = require("../factories/ValueFactory");
const CheckerProgrammer_1 = require("./CheckerProgrammer");
const FunctionImporeter_1 = require("./helpers/FunctionImporeter");
const OptionPredicator_1 = require("./helpers/OptionPredicator");
const disable_function_importer_declare_1 = require("./helpers/disable_function_importer_declare");
const check_object_1 = require("./internal/check_object");
const feature_object_entries_1 = require("./internal/feature_object_entries");
var IsProgrammer;
(function (IsProgrammer) {
    IsProgrammer.configure = (options) => (importer) => ({
        prefix: "$i",
        equals: !!options?.object,
        trace: false,
        path: false,
        numeric: OptionPredicator_1.OptionPredicator.numeric({
            numeric: options?.numeric,
        }),
        atomist: () => (entry) => () => [
            ...(entry.expression ? [entry.expression] : []),
            ...(entry.conditions.length === 0
                ? []
                : [
                    entry.conditions
                        .map((set) => set
                        .map((s) => s.expression)
                        .reduce((a, b) => typescript_1.default.factory.createLogicalAnd(a, b)))
                        .reduce((a, b) => typescript_1.default.factory.createLogicalOr(a, b)),
                ]),
        ].reduce((x, y) => typescript_1.default.factory.createLogicalAnd(x, y)),
        combiner: () => (type) => {
            const initial = type === "and"
                ? typescript_1.default.factory.createTrue()
                : typescript_1.default.factory.createFalse();
            const binder = type === "and"
                ? typescript_1.default.factory.createLogicalAnd
                : typescript_1.default.factory.createLogicalOr;
            return (_input, binaries) => binaries.length
                ? binaries
                    .map((binary) => binary.expression)
                    .reduce((x, y) => binder(x, y))
                : initial;
        },
        joiner: {
            object: options?.object ||
                (0, check_object_1.check_object)({
                    equals: !!options?.object,
                    undefined: OptionPredicator_1.OptionPredicator.undefined({
                        undefined: options?.undefined,
                    }),
                    assert: true,
                    reduce: typescript_1.default.factory.createLogicalAnd,
                    positive: typescript_1.default.factory.createTrue(),
                    superfluous: () => typescript_1.default.factory.createFalse(),
                })(importer),
            array: (input, arrow) => typescript_1.default.factory.createCallExpression(IdentifierFactory_1.IdentifierFactory.access(input)("every"), undefined, [arrow]),
            failure: () => typescript_1.default.factory.createFalse(),
        },
        success: typescript_1.default.factory.createTrue(),
    });
    /* -----------------------------------------------------------
        WRITERS
    ----------------------------------------------------------- */
    IsProgrammer.write = (project) => (modulo, disable) => (equals) => {
        const importer = disable === {}
            ? (0, disable_function_importer_declare_1.disable_function_importer_declare)(new FunctionImporeter_1.FunctionImporter(modulo.getText()))
            : new FunctionImporeter_1.FunctionImporter(modulo.getText());
        // CONFIGURATION
        const config = {
            ...IsProgrammer.configure({
                object: (0, check_object_1.check_object)({
                    equals,
                    undefined: OptionPredicator_1.OptionPredicator.undefined(project.options),
                    assert: true,
                    reduce: typescript_1.default.factory.createLogicalAnd,
                    positive: typescript_1.default.factory.createTrue(),
                    superfluous: () => typescript_1.default.factory.createFalse(),
                })(importer),
                numeric: OptionPredicator_1.OptionPredicator.numeric(project.options),
            })(importer),
            trace: equals,
            addition: () => importer.declare(modulo),
        };
        config.decoder = () => (input, target, explore) => {
            if (target.size() === 1 &&
                target.objects.length === 1 &&
                target.isRequired() === true &&
                target.nullable === false) {
                // ONLY WHEN OBJECT WITH SOME ATOMIC PROPERTIES
                const obj = target.objects[0];
                if (obj._Is_simple(explore.from === "top" ? 0 : 1) &&
                    (equals === false ||
                        OptionPredicator_1.OptionPredicator.undefined(project.options) ===
                            false))
                    return typescript_1.default.factory.createLogicalAnd(ExpressionFactory_1.ExpressionFactory.isObject({
                        checkNull: true,
                        checkArray: false,
                    })(input), config.joiner.object(typescript_1.default.factory.createAsExpression(input, TypeFactory_1.TypeFactory.keyword("any")), (0, feature_object_entries_1.feature_object_entries)(config)(importer)(obj)(typescript_1.default.factory.createAsExpression(input, TypeFactory_1.TypeFactory.keyword("any")), "top")));
            }
            return CheckerProgrammer_1.CheckerProgrammer.decode(project)(config)(importer)(input, target, explore);
        };
        // GENERATE CHECKER
        return CheckerProgrammer_1.CheckerProgrammer.write(project)(config)(importer);
    };
    IsProgrammer.write_function_statements = (project) => (importer) => (collection) => {
        const config = IsProgrammer.configure()(importer);
        const objects = CheckerProgrammer_1.CheckerProgrammer.write_object_functions(project)(config)(importer)(collection);
        const unions = CheckerProgrammer_1.CheckerProgrammer.write_union_functions(project)(config)(importer)(collection);
        const arrays = CheckerProgrammer_1.CheckerProgrammer.write_array_functions(project)(config)(importer)(collection);
        const tuples = CheckerProgrammer_1.CheckerProgrammer.write_tuple_functions(project)(config)(importer)(collection);
        return [
            ...objects.filter((_, i) => importer.hasLocal(`${config.prefix}o${i}`)),
            ...unions.filter((_, i) => importer.hasLocal(`${config.prefix}u${i}`)),
            ...arrays.filter((_, i) => importer.hasLocal(`${config.prefix}a${i}`)),
            ...tuples.filter((_, i) => importer.hasLocal(`${config.prefix}t${i}`)),
        ];
    };
    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    IsProgrammer.decode = (project) => (importer) => CheckerProgrammer_1.CheckerProgrammer.decode(project)(IsProgrammer.configure()(importer))(importer);
    IsProgrammer.decode_object = (importer) => CheckerProgrammer_1.CheckerProgrammer.decode_object(IsProgrammer.configure()(importer))(importer);
    IsProgrammer.decode_to_json = (checkNull) => (input) => typescript_1.default.factory.createLogicalAnd(ExpressionFactory_1.ExpressionFactory.isObject({
        checkArray: false,
        checkNull,
    })(input), typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("function"), ValueFactory_1.ValueFactory.TYPEOF(IdentifierFactory_1.IdentifierFactory.access(input)("toJSON"))));
    IsProgrammer.decode_functional = (input) => typescript_1.default.factory.createStrictEquality(typescript_1.default.factory.createStringLiteral("function"), ValueFactory_1.ValueFactory.TYPEOF(input));
})(IsProgrammer || (exports.IsProgrammer = IsProgrammer = {}));
