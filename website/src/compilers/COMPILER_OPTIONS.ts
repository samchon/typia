import ts from "typescript";

export const COMPILER_OPTIONS: ts.CompilerOptions = {
  target: ts.ScriptTarget.ES2015,
  module: ts.ModuleKind.ES2015,
  // lib: ["DOM", "ES2015"],
  esModuleInterop: true,
  downlevelIteration: true,
  forceConsistentCasingInFileNames: true,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  strict: true,
  skipLibCheck: true,
};
