import ts from "typescript";

export const COMPILER_OPTIONS: ts.CompilerOptions = {
  target: ts.ScriptTarget.ESNext,
  module: ts.ModuleKind.ESNext,
  // lib: ["DOM", "ES2015"],
  esModuleInterop: true,
  forceConsistentCasingInFileNames: true,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  strict: true,
  skipLibCheck: true,
};
