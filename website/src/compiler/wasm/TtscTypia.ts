// Type-safe wrapper around the `globalThis.ttscTypia` object exported by the
// ttsc-typia wasm binary.

export interface ITtscTypiaApi {
  version(): {
    version: string;
    commit: string;
    date: string;
    go: string;
    goos: string;
    goarch: string;
  };
  transform(opts: ITtscTypiaTransformOpts): Promise<ITtscTypiaResult>;
  build(opts: ITtscTypiaBuildOpts): Promise<ITtscTypiaResult>;
}

export interface ITtscTypiaTransformOpts {
  cwd: string;
  tsconfig: string;
  file?: string;
  output?: "ts" | "js";
}

export interface ITtscTypiaBuildOpts {
  cwd: string;
  tsconfig: string;
  outDir?: string;
  emit?: boolean;
  noEmit?: boolean;
}

export interface ITtscTypiaResult {
  code: number;
  stdout: string;
  stderr: string;
}
