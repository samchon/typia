"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disable_function_importer_declare = void 0;
const disable_function_importer_declare = (importer) => disable(importer);
exports.disable_function_importer_declare = disable_function_importer_declare;
const disable = (importer) => ({
    method: importer.method,
    empty: () => importer.empty(),
    use: (name) => importer.use(name),
    useLocal: (name) => importer.useLocal(name),
    hasLocal: (name) => importer.hasLocal(name),
    declare: (_modulo) => [],
    declareUnions: () => [],
    increment: () => importer.increment(),
    emplaceUnion: (prefix, name, factory) => importer.emplaceUnion(prefix, name, factory),
    trace: () => importer.trace(),
});
