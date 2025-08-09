# Typia TypeScript Transformer Library

Typia is a high-performance TypeScript transformer library that generates super-fast runtime validators, JSON operations, LLM function calling schemas, Protocol Buffer encoding/decoding, and random data generation. It achieves 20,000x faster runtime validation than class-validator and 200x faster JSON serialization than class-transformer.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Bootstrap, Build, and Test
- Install pnpm if not available: `npm install -g pnpm@8`
- Install all dependencies: `pnpm install --force` -- takes 3-4 minutes. NEVER CANCEL. Set timeout to 10+ minutes.
- Build the project: `pnpm run build` -- takes 15-20 seconds. NEVER CANCEL. Set timeout to 5+ minutes.
- Run the complete test suite: `pnpm run test` -- takes 4-5 minutes. NEVER CANCEL. Set timeout to 15+ minutes.

### Code Quality and Validation
- Check code style: `pnpm run eslint` -- takes under 1 second
- Fix linting issues: `pnpm run eslint:fix` 
- Check formatting: `pnpm run prettier` -- takes 5-10 seconds
- Fix formatting issues: `pnpm run prettier:fix`
- ALWAYS run both `pnpm run eslint` and `pnpm run prettier:fix` before committing or the CI (.github/workflows/build.yml) will fail

### CLI Usage
- The CLI is available after building: `node lib/executable/typia.js --help`
- Setup typia in a project: `node lib/executable/typia.js setup --manager pnpm`
- Generate code: `node lib/executable/typia.js generate --input src/templates --output src/functional`

### Development Workflow  
- Use development build with watching: `pnpm run dev` -- starts TypeScript compiler in watch mode
- Debug error-specific builds: `pnpm run dev:errors` -- watches error-related TypeScript compilation

## Validation

### Manual Testing Scenarios
After making changes, ALWAYS test core functionality by building and running examples:

1. **Build and Test Examples**: 
   ```bash
   cd examples && pnpm run build
   node bin/validators/is.js  # Should output: true
   node bin/llm/application.js  # Should output LLM function schema
   ```

2. **Basic Type Guards**: Validate transformers work:
   ```typescript
   // In examples/src/ - create test file, then build
   import typia from "typia";
   const isString = typia.createIs<string>();
   console.log(isString("hello")); // should be true after transformation
   ```

3. **JSON Operations**: Test JSON schema generation:
   ```typescript
   // Build examples first, then check bin/ output
   interface User { name: string; age: number; }
   const schema = typia.json.application<[User]>();
   const stringify = typia.json.createStringify<User>();
   ```

4. **LLM Function Calling**: Validate Claude/OpenAI compatibility:
   ```typescript
   // Use built examples: examples/bin/llm/application.js
   const app = typia.llm.application<MyService, "claude">();
   ```

5. **CLI Commands**: Test all CLI functionality:
   ```bash
   node lib/executable/typia.js --help
   node lib/executable/typia.js setup --help  # Setup wizard  
   node lib/executable/typia.js generate --help  # Generate wizard
   ```

### Continuous Integration Requirements
- The build must pass all checks in `.github/workflows/build.yml`
- Code must pass ESLint without warnings
- Code must be properly formatted with Prettier
- All tests in the test suite must pass

## Repository Structure

### Key Source Directories
```
src/
├── transformers/          # TypeScript AST transformation logic (CRITICAL)
│   ├── CallExpressionTransformer.ts   # Transforms typia.xxx() calls
│   ├── FileTransformer.ts            # Main file transformation orchestrator
│   └── features/                     # Feature-specific transformers
├── programmers/           # Code generators for different features (CRITICAL)
│   ├── AssertProgrammer.ts           # Generates assertion functions
│   ├── IsProgrammer.ts              # Generates type guard functions
│   ├── ValidateProgrammer.ts        # Generates validation functions
│   ├── json/                        # JSON-related programmers
│   └── llm/                         # LLM function calling programmers
├── factories/             # Metadata and AST node creation utilities
│   ├── MetadataFactory.ts           # Creates type metadata
│   └── JsonMetadataFactory.ts       # JSON schema metadata
├── schemas/              # Schema definitions and metadata types
├── tags/                 # Validation tag definitions
├── executable/           # CLI tools and commands
├── internal/             # Internal implementation details
└── utils/                # General utilities
```

### Key Test and Build Directories
```
test/                     # Main test automation module (LARGE - 1000s of files)
├── src/                 # Test source files
├── generate/            # Generated test outputs
└── schemas/             # Test schema files
benchmark/               # Performance benchmarking code
examples/                # Usage examples and demos
deploy/                  # Deployment and packaging scripts
```

## Common Tasks

### Package Management
The project uses pnpm workspace with these workspaces:
- `packages/*` (if any sub-packages exist)
- `test` - Test automation module  
- `test-error` - Error testing module
- `test-esm` - ES module testing
- `benchmark` - Performance benchmarks
- `examples` - Usage examples

### Adding New Features
1. **Transformer**: Add transformation logic in `src/transformers/features/`
2. **Programmer**: Implement code generation in `src/programmers/`
3. **Factory**: Add metadata generation in `src/factories/`
4. **Tests**: Add tests in the `test/` directory following existing patterns

### Troubleshooting Common Issues

#### Build Issues
- If `pnpm install` warns about missing `lib/executable/typia.js`, this is normal before first build
- If builds fail, ensure TypeScript version compatibility (requires 4.8.0 - 5.10.0)
- The project uses `ts-patch` for transformer integration, which is installed during `pnpm install`

#### Test Issues  
- Tests use custom deployment system: `ts-node deploy --tag test`
- Test files must start with `test_` prefix and be exported
- The test suite builds multiple workspaces and can take 4+ minutes
- NEVER interrupt test runs - they perform comprehensive validation across all workspaces
- Test directories (`test/`, `test-esm/`, `test-error/`) contain thousands of files - be cautious when navigating

#### Formatting Issues
- Before October 2024, codebase had formatting issues in `src/tags/` directory (now resolved)
- Always run `pnpm run prettier:fix` before committing
- ESLint and Prettier configs: `eslint.config.cjs` and `prettier.config.js` 
- Prettier will show (~22 files with formatting issues initially, fixed by prettier:fix)

#### TypeScript Transformer Issues
- Project requires ts-patch for TypeScript transformer integration
- Transformations happen at compile-time, converting typia calls to runtime code  
- If CLI shows "missing lib/executable/typia.js", run `pnpm run build` first
- The project supports TypeScript 4.8.0 - 5.10.0 (peer dependency constraint)

### Performance Expectations  
- **Dependencies**: 3-4 minutes for full install with pnpm (includes ts-patch installation)
- **Build**: 15-20 seconds for full TypeScript compilation + rollup bundling
- **Tests**: 4-5 minutes for complete test suite (builds multiple workspaces)
- **Examples Build**: 10-15 seconds for transforming and building examples  
- **Linting**: Under 1 second (eslint with TypeScript parser)
- **Formatting**: 5-10 seconds (prettier check/fix across entire src/ directory)

### Workspace Build Order
When running tests, the build process follows this sequence:
1. Main project build (`pnpm run build`)
2. Test workspace preparation (ts-patch install)
3. Test-ESM workspace build 
4. Test-Error workspace build
5. Benchmark workspace build
6. Examples workspace build (if included)

### Key Files to Monitor
- `package.json` - Main package configuration and scripts
- `pnpm-workspace.yaml` - Workspace configuration (6 workspaces)
- `tsconfig.json` - TypeScript compilation settings  
- `rollup.config.mjs` - ES module bundle configuration
- `eslint.config.cjs` - ESLint rules and TypeScript project references
- `prettier.config.js` - Code formatting configuration  
- `.github/workflows/build.yml` - CI configuration (Node 20.x, 22.x, LTS)
- `deploy/index.ts` - Custom deployment system using ts-node

### Important Build Artifacts  
- `/lib/` - Compiled JavaScript and TypeScript definitions (both CommonJS and ES modules)
- `/lib/executable/typia.js` - CLI binary (created after build)
- `examples/bin/` - Built example files for testing functionality
- `test/generate/output/` - Generated test files

## Development Patterns

### Transformer Development
- Typia transforms `typia.xxx()` calls at compile-time into optimized runtime functions
- The transformation happens through TypeScript's compiler API
- Key entry point is `CallExpressionTransformer.ts`

### Code Generation  
- Programmers generate JavaScript code based on TypeScript type metadata
- Generated code replaces the original `typia.xxx()` calls
- Each feature (is, assert, validate, json, llm, etc.) has its own programmer

### Type Analysis
- TypeScript types are analyzed at compile-time using the TypeScript Compiler API
- Types are converted into metadata structures in `factories/`
- Metadata drives the code generation process

## LLM and AI Integration

Typia provides first-class support for AI function calling:
- **Claude AI**: `typia.llm.application<API, "claude">()`
- **OpenAI GPT**: `typia.llm.application<API, "chatgpt">()`  
- **Google Gemini**: `typia.llm.application<API, "gemini">()`
- **Other providers**: DeepSeek, Llama supported

Test LLM functionality with:
```typescript
import typia from "typia";
interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number; 
}
const app = typia.llm.application<Calculator, "claude">();
```

Always validate that LLM schema generation produces correct output for the target AI provider.

## Common Debugging Scenarios

### Build Failures
1. **TypeScript errors**: Check TypeScript version compatibility (4.8.0 - 5.10.0)
2. **Missing transformers**: Ensure `ts-patch install` ran during pnpm install  
3. **Module resolution**: Verify pnpm workspace linking with `pnpm list typia`
4. **Rollup bundling**: Check `rollup.config.mjs` for configuration issues

### Runtime Issues
1. **Transformation not applied**: Verify typia transformer is configured correctly
2. **Generated code errors**: Check `/lib/` directory has correct compiled output
3. **Import issues**: Use correct import paths for development vs. published package

### Test Failures  
1. **Timeout issues**: Ensure sufficient timeout for long-running builds (use 15+ min timeout)
2. **Workspace issues**: Check that all workspaces build correctly individually
3. **Generated files**: Verify `/test/generate/output/` contains expected generated files

### Performance Debugging
- Check benchmark results in `/benchmark/results/` for performance comparisons
- Typia achieves 20,000x faster validation than class-validator  
- JSON serialization is 200x faster than class-transformer
- Generated code should be minimal and optimized (inspect compiled output)

## Quick Reference Commands
```bash
# Full setup from scratch
npm install -g pnpm@8
pnpm install --force  # 3-4 min, NEVER CANCEL
pnpm run build        # 15-20 sec 
pnpm run test         # 4-5 min, NEVER CANCEL

# Development cycle  
pnpm run dev          # Watch mode
pnpm run prettier:fix # Format code
pnpm run eslint       # Lint check

# Validation
cd examples && pnpm run build && node bin/validators/is.js
node lib/executable/typia.js --help

# CI requirements  
pnpm run eslint && pnpm run prettier && pnpm run test
```