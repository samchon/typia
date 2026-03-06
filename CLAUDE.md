# Typia - Claude Code Project Guide

## What is Typia?
TypeScript runtime validation library that transforms pure TypeScript types into optimized runtime functions at compile time via `ts-patch`. 20,000x faster than class-validator, 200x faster than class-transformer.

## Monorepo Structure (pnpm workspace)
```
packages/
  interface/    # @typia/interface - Pure type definitions (no implementation)
  utils/        # @typia/utils - Utility functions, LLM JSON parser, schema converters
  core/         # @typia/core - Metadata, factories, programmers (code generators)
  transform/    # @typia/transform - AST transformers, CallExpressionTransformer
  typia/        # typia - Main public API + CLI
  langchain/    # @typia/langchain - LangChain.js integration
  mcp/          # @typia/mcp - Model Context Protocol integration
  vercel/       # @typia/vercel - Vercel AI SDK integration
tests/
  template/               # Test data structures (generate() + SPOILERS)
  test-typia-automated/   # Main automated test suite (ts-node, DynamicExecutor)
  test-typia-generate/    # Generation command tests
  test-typia-schema/      # JSON/LLM schema tests
  test-utils/             # @typia/utils tests
  test-utils-automated/   # Automated utils tests
  test-error/             # Compilation failure tests
  test-langchain/         # LangChain integration tests
  test-mcp/               # MCP integration tests
  test-vercel/            # Vercel AI SDK tests
```

## Build Order (dependency graph)
1. `@typia/interface` (no deps)
2. `@typia/utils` (depends on interface)
3. `@typia/core` (depends on interface, utils)
4. `@typia/transform` (depends on core, interface, utils)
5. `typia` (depends on all above)
6. Integration packages: langchain, mcp, vercel

## Key Commands
```bash
pnpm install              # Install dependencies
pnpm run build            # Build all packages (pnpm --filter=./packages/* -r build)
pnpm run test             # Run all tests (pnpm --filter=./tests/test-* -r start)
pnpm run format           # Prettier format all TS files

# Per-package
cd packages/<name> && pnpm run build    # rimraf lib && tsc && rollup -c
cd packages/<name> && pnpm run dev      # tsc --watch

# Test filtering
cd tests/test-typia-automated && pnpm start -- --include createIs
cd tests/test-typia-automated && pnpm start -- --exclude ArrayAny
cd tests/test-typia-schema && pnpm start -- --include llm
```

## Core Architecture: Transformation Pipeline
```
TypeScript Source → FileTransformer → CallExpressionTransformer
  → FUNCTORS map routes to XxxTransformer → XxxProgrammer.write()
  → MetadataFactory analyzes types → CheckerProgrammer generates checks
  → FeatureProgrammer.writeDecomposed() → Optimized runtime code
```

### Key Files
- `packages/transform/src/CallExpressionTransformer.ts` - Routes `typia.xxx()` calls
- `packages/core/src/programmers/` - Code generation engines
- `packages/core/src/factories/MetadataFactory.ts` - Type analysis
- `packages/interface/src/` - All type definitions (ILlmSchema, IValidation, etc.)
- `packages/utils/src/` - Runtime utilities (LlmJson, HttpLlm, converters)

## Naming Conventions
- **Files**: camelCase (e.g., `jsonMetadata.ts`)
- **Classes/Namespaces**: PascalCase (e.g., `IsProgrammer`, `MetadataFactory`)
- **Interfaces**: Prefix with `I` (e.g., `IValidation`, `ILlmSchema`)
- **Test functions**: `test_` prefix, exported (e.g., `export const test_createIs_ArraySimple`)
- **Test helpers**: `_test_` prefix (e.g., `_test_is`, `_test_assert`)

## Testing System
- Custom test runner using `@nestia/e2e` `DynamicExecutor` - discovers `test_` functions
- No external framework (Jest/Vitest) - errors thrown = test failure
- Test structures in `tests/template/src/structures/` have `generate()` and `SPOILERS`
- Test helpers use curried pattern: `_test_is(name)<Type>(structure)(functionToTest)`
- Tests run via `ts-node` (no pre-compilation needed)

## TypeScript / Formatting
- TypeScript 5.9.3, Target: ES2020, Module: ESNext
- Prettier: 80 chars, 2 spaces, trailing commas
- ESLint: @typescript-eslint, no-floating-promises: error
- Strict mode with noUnusedLocals, noUnusedParameters, noImplicitReturns
