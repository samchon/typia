import type * as ts from 'typescript';
import {
  CancellationToken,
  createCompilerHostWorker,
  CreateSourceFileOptions,
  CustomTransformers,
  ScriptTarget,
  SourceFile, WriteFileCallback,
} from "typescript";
import {ITransformOptions} from "./transformers/ITransformOptions";

// Copied from ts-patch to prevent needing a new dependency
type ProgramTransformerExtras = {
  /**
   * Originating TypeScript instance
   */
  ts: typeof ts;
}

export default function (
  program: ts.Program,
  host: ts.CompilerHost | undefined,
  _options: ITransformOptions | undefined,
  { ts: tsInstance }: ProgramTransformerExtras
) {
  const newOptions = {
    ...program.getCompilerOptions(),
    noLib: false,
    noResolve: false,
    isolatedModules: false,
  }

  if(!host) {
    host = createCompilerHostWorker(newOptions, undefined, tsInstance.sys);
  }

  const standardCompilerHost = createCompilerHostWorker(newOptions, undefined, tsInstance.sys);

  const customHost = {
    ...standardCompilerHost,
    getSourceFile: (filename: string, languageVersionOrOptions: ScriptTarget | CreateSourceFileOptions) => host?.getSourceFile?.(filename, languageVersionOrOptions) ?? standardCompilerHost.getSourceFile(filename, languageVersionOrOptions),
    writeFile: host?.writeFile ?? standardCompilerHost.writeFile,
    fileExists: (filename: string) => (host?.fileExists(filename) ?? false) ? true : standardCompilerHost.fileExists(filename),
  }

  const newProgram = tsInstance.createProgram(
    /* rootNames */ program.getRootFileNames(),
    newOptions,
    customHost,
    /* oldProgram */ program
  );
  if(program.getRootFileNames().length === 1) {
    const fileToEmit = program.getSourceFiles()[0];
    if(!fileToEmit) {
      return newProgram;
    }
    const oldEmit = newProgram.emit;
    newProgram.emit = (_targetSourceFile?: SourceFile | undefined, writeFile?: WriteFileCallback | undefined, cancellationToken?: CancellationToken | undefined, emitOnlyDtsFiles?: boolean | undefined, customTransformers?: CustomTransformers | undefined) => {
      return oldEmit(fileToEmit, writeFile, cancellationToken, emitOnlyDtsFiles, customTransformers);
    }
  }

  return newProgram;
}