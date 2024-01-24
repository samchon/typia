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
import fs from "fs";

// Copied from ts-patch to prevent needing a new dependency
type ProgramTransformerExtras = {
  /**
   * Originating TypeScript instance
   */
  ts: typeof ts;
}

let programCache: ts.Program | undefined;
let compilerHostCache: ts.CompilerHost | undefined;
let optionsCache: ts.CompilerOptions | undefined;

export default function (
  program: ts.Program,
  host: ts.CompilerHost | undefined,
  _options: ITransformOptions | undefined,
  { ts: tsInstance }: ProgramTransformerExtras
) {

  if(!optionsCache) {
    optionsCache = {
      ...program.getCompilerOptions(),
      noLib: false,
      noResolve: false,
      isolatedModules: false,
    }
  }

  if(!compilerHostCache) {
    compilerHostCache = createCompilerHostWorker(optionsCache, undefined, tsInstance.sys);
  }

  if (!host) {
    host = compilerHostCache;
  }

  if(!programCache) {
    fs.appendFileSync('transform.log', 'Creating new cached program\n');
    programCache = tsInstance.createProgram(
      /* rootNames */ program.getRootFileNames(),
      optionsCache,
      compilerHostCache,
      /* oldProgram program */
    );
  }

  const customHost = {
    ...compilerHostCache,
    getSourceFile: (filename: string, languageVersionOrOptions: ScriptTarget | CreateSourceFileOptions) => host?.getSourceFile?.(filename, languageVersionOrOptions) ?? compilerHostCache!.getSourceFile(filename, languageVersionOrOptions),
    writeFile: host?.writeFile ?? compilerHostCache.writeFile,
    fileExists: (filename: string) => (host?.fileExists(filename) ?? false) ? true : compilerHostCache!.fileExists(filename),
  }

  const newProgram = tsInstance.createProgram(
    /* rootNames */ programCache.getRootFileNames(),
    optionsCache,
    customHost,
    /* oldProgram */ programCache
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