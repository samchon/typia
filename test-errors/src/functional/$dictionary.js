"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$dictionary = void 0;
/**
 * @internal
 */
const blackhole = {};
exports.$dictionary = (() => {
    const glob = typeof global === "object" &&
        typeof global.process === "object" &&
        typeof global.process.versions === "object" &&
        typeof global.process.versions.node !== "undefined"
        ? (global ?? blackhole)
        : (self ?? blackhole);
    return (glob.__typia_custom_validator ??= new Map());
})();
