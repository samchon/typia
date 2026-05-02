# Mission: Porting typia from TypeScript to Go

Port the TypeScript project in the parent directory `../typia` to Go. The goal is to make typia's original functionality work identically in a Go environment.

The reference originals for this mission are the following two source trees:

- `../typia/packages/core/src`
- `../typia/packages/transform/src`

The transformer integration on the `../typia/packages/typia` side will only be examined to the extent needed for actual integration, after the porting of the two trees above has progressed sufficiently.

## Core Strategy

**Bulk-copy the TS originals first, then convert file by file**
- Do not design new empty Go files from scratch.
- First, copy the TS source code from `../typia` as-is into `packages/typia/native/`.
- Treat the copied TS files as the source-of-truth reference, and convert them to Go one file at a time, renaming each `.ts` extension to `.go` while translating the code.
- A `.ts` file is an original still queued for porting. A `.go` file is the completed port of that file.
- Do not write the same functionality from scratch in a separate location, nor implement it indirectly in another Go file while leaving the original copy untouched.

The initial seed command is as follows. Run this only once, at the very beginning of the work. Once per-file conversion has started, the converted `.go` files would be wiped, so do not re-run the bulk-copy command.

```bash
mkdir -p packages/typia/native
rsync -a --delete ../typia/packages/core/src/ packages/typia/native/core/
rsync -a --delete ../typia/packages/transform/src/ packages/typia/native/transform/
```

The target mappings are as follows.

- `../typia/packages/core/src/programmers/IsProgrammer.ts`
  -> `packages/typia/native/core/programmers/IsProgrammer.go`
- `../typia/packages/transform/src/transform.ts`
  -> `packages/typia/native/transform/transform.go`

## Porting Principles

**Mechanical 1:1 porting**
- Keep typia's file tree, module structure, class/function/type names, and coding style as close to the original as possible.
- Identifier examples: `IsProgrammer.write`, `IsProgrammer.IProps`, `RandomProgrammer.write`, etc., must retain traceable naming and structure in Go as well.
- Restructuring into idiomatic Go style (naming conventions, redesigned interfaces, repartitioned packages, etc.) is out of scope for this mission. Handle that as a separate follow-up mission.

**Implement as general algorithms**
- typia is a compiler that takes arbitrary TypeScript types as input, performs AST analysis, and generates validation/serialization code.
- All ported logic must be a general algorithm that works for arbitrary input. Branches or workarounds that depend on specific type names are not allowed.
- Code generation is performed by AST assembly. Do not substitute string concatenation.

**Tests are immutable**
- The test code under `tests` and the test types (e.g., `SimpleObject` and many others) are the verification baseline. Do not modify, delete, or simplify them.
- If a test fails, fix the typia Go core instead.

## Workflow

Execute the steps below sequentially, all the way to the end. Do not ask the user questions or request interim check-ins until every step is complete.

### Step 1 - Bulk-copy TS originals
Use the initial seed command above to bulk-copy `../typia/packages/core/src` and `../typia/packages/transform/src` to the following locations respectively.

- `packages/typia/native/core`
- `packages/typia/native/transform`

Immediately after the bulk-copy, record the copy scope and file count in `.wiki/`. This record is the basis for subsequently tracking which files are still in `.ts` state and which have been converted to `.go`.

### Step 2 - Analyze TypeScript shims
Carry out a precise analysis of the TypeScript Compiler API-related shims that `../typia` depends on (AST, type checker, etc.) and document them under the `.wiki/shim/` folder. Specify each shim's role and the corresponding design for the Go port concretely.

### Step 3 - Author per-file conversion plans
For every `packages/typia/native/core/**/*.ts` and `packages/typia/native/transform/**/*.ts` copied file, write a 1:1 correspondence analysis document in the form `.wiki/packages/{core|transform}/.../{filename}.md`. Do not omit a single file. Each document must include:

- Original file path and native copy path
- The file's role and externally exposed interfaces
- Summary of internal logic
- Go translation plan (corresponding identifiers, shims used, points of caution)
- Conversion status: `TS_COPIED`, `GO_PORTED`, `VERIFIED`

### Step 4 - Convert files to `.go` one by one
Pick the copied `.ts` files one at a time and convert each to a `.go` file at the same location.

- When converting, translate directly based on the contents of that `.ts` file.
- Once a file has been converted, remove the `.ts` and keep only the `.go`.
- Preserve filenames and relative paths from the original structure.
- Update the converted file's `.wiki` document to `GO_PORTED` immediately.
- Until a file's port is finished, do not implement the same functionality indirectly in some other temporary Go file.

### Step 5 - Review and missed-file check
Review and revise every per-file document from start to finish. Be sure to verify the following.

- The list of `.ts` files still remaining in the native tree
- Files that have been converted to `.go` but whose `.wiki` status was not updated
- Omissions, additions, or mismatches between the original `../typia` structure and the native structure
- Whether any code is hard-coded to a specific test or specific type name

### Step 6 - Iterate until tests pass
Run `pnpm test`, diagnose failing cases, and fix the typia Go core logic. Repeat the diagnose-fix cycle until every test passes.

### Step 7 - Completion report
Only once all of the above steps are complete, report the result to the user and request a review.

## Progress Rules

- Do not stop until every step is finished.
- For ambiguous points, judge based on the actual behavior of the `../typia` original.
- Record decisions made during progress in the relevant analysis document or code.
- The copied TS files are the work queue, so do not delete them without analysis or replace them with batch-generated code.
