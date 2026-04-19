// Package driver: post-emit rewriter.
//
// tsgo emits `.js` with typia call expressions preserved as-is because the
// TypeScript transformer that would rewrite them (from the ts-patch era)
// doesn't run. This file implements the emit-time rewrite pattern pioneered
// by tsgonest: we hook tsgo's Emit() via its WriteFile callback, locate each
// previously-recognised typia call in the emitted JS, and replace the call
// expression with the JS we would have synthesised at the AST level.
//
// The rewriter operates on the output text only — it relies on the driver's
// CollectCallSites pass having already produced an ordered list of
// (file, call, emittedJS) triples. For Phase 0 we match typia calls by
// textual pattern (`<alias>.<method>(...)`), which is safe because the
// compiler-stripped call site is distinctive.
package driver

import (
	"context"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"unicode"

	"github.com/microsoft/typescript-go/shim/ast"
	shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
)

// Rewrite describes one emit-time patch. Produced by CollectCallSites after
// the engine has generated a replacement JS fragment for the call.
type Rewrite struct {
	// The original TS source file (used to match the emitted .js).
	File *ast.SourceFile
	// Token on the left of the dot — the local name by which `typia` is
	// referenced in user code (usually `typia`; can be any import alias).
	RootName string
	// Namespace segment chain up to (and not including) the method, e.g.
	// `["json"]` for `typia.json.stringify`. Empty for root-level `typia.is`.
	Namespaces []string
	// Method name, e.g. "is", "assert", "validate".
	Method string
	// JavaScript expression to splice in — this becomes the entire call
	// expression in the output (parenthesised so it's an expression).
	Replacement string
	// When true, the rewriter consumes the trailing `(...)` call parens
	// emitted by tsgo so the replacement stands alone as a value — used for
	// factory methods like `createIs<T>()` whose result is itself a function
	// that the user calls later.
	ConsumeParens bool
}

// RewriteSet groups rewrites by file, preserving source order.
type RewriteSet struct {
	byPath map[string][]Rewrite
}

// NewRewriteSet returns an empty set.
func NewRewriteSet() *RewriteSet { return &RewriteSet{byPath: map[string][]Rewrite{}} }

// Add registers a rewrite under the absolute path of its source file.
func (rs *RewriteSet) Add(r Rewrite) {
	if r.File == nil {
		return
	}
	path := filepath.ToSlash(r.File.FileName())
	rs.byPath[path] = append(rs.byPath[path], r)
}

// Len returns the total number of rewrites across every file.
func (rs *RewriteSet) Len() int {
	n := 0
	for _, rws := range rs.byPath {
		n += len(rws)
	}
	return n
}

// RewriteSentinel is the marker inserted at the top of a patched file so
// re-running the emit on an already-rewritten file is a no-op. Mirrors
// tsgonest's `/* @tsgonest-rewritten */` pattern; keeps `ttsc build --emit`
// idempotent in watch-mode / editor builds.
const RewriteSentinel = "/* @typia-ttsc-rewritten */"

// EmitAll runs tsgo's emitter, patching every registered typia call in the
// output. Returns the tsgo diagnostics and any patch-time error. When
// `writeFile` is nil, the patched JS is written to disk via the standard
// tsgo WriteFile (which respects outDir / tsbuildinfo).
func (p *Program) EmitAll(rs *RewriteSet, writeFile shimcompiler.WriteFile) (*shimcompiler.EmitResult, []Diagnostic, error) {
	if p == nil || p.TSProgram == nil {
		return nil, nil, errors.New("driver: nil program")
	}
	if rs == nil {
		rs = NewRewriteSet()
	}
	// Per-file cursor so we consume rewrites in source order.
	cursors := map[string]int{}
	wf := func(fileName, text string, data *shimcompiler.WriteFileData) error {
		// Idempotency guard: if the emit includes the sentinel line (user
		// piped the output back into the build), skip entirely.
		if strings.Contains(text, RewriteSentinel) {
			if writeFile != nil {
				return writeFile(fileName, text, data)
			}
			return writeOutput(fileName, text)
		}
		patched, err := applyRewrites(fileName, text, rs, cursors)
		if err != nil {
			return err
		}
		// Mirror typia v12's ImportTransformer second pass — drop typia
		// default imports that the rewrite pass has left unused so the
		// runtime .js doesn't carry an accidental require("typia").
		patched = dropUnusedTypiaImports(patched)
		// Only stamp the sentinel when we actually touched the file.
		if patched != text {
			patched = insertSentinel(patched)
		}
		if writeFile != nil {
			return writeFile(fileName, patched, data)
		}
		return writeOutput(fileName, patched)
	}

	result := p.TSProgram.Emit(context.Background(), shimcompiler.EmitOptions{
		WriteFile: wf,
	})
	if result == nil {
		return nil, nil, errors.New("driver: Emit returned nil")
	}
	return result, convertDiagnostics(result.Diagnostics), nil
}

// writeOutput is the default disk writer used when EmitAll's caller does not
// supply a custom WriteFile hook. Creates parent directories so outDir-relative
// paths work without a pre-flight mkdir and mirrors tsgo's default 0o644 perms.
func writeOutput(fileName, text string) error {
	if dir := filepath.Dir(fileName); dir != "" {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return err
		}
	}
	return os.WriteFile(fileName, []byte(text), 0o644)
}

// insertSentinel stamps the rewrite sentinel near the top of `text`, keeping
// any `"use strict";` / `'use strict';` directive first so V8 doesn't lose
// strict mode. Idempotent — callers should check `strings.Contains(text,
// RewriteSentinel)` before invoking (done by EmitAll).
func insertSentinel(text string) string {
	for _, prefix := range []string{"\"use strict\";\n", "'use strict';\n"} {
		if strings.HasPrefix(text, prefix) {
			return prefix + RewriteSentinel + "\n" + text[len(prefix):]
		}
	}
	return RewriteSentinel + "\n" + text
}

// applyRewrites looks up rewrites for the source that produced `outputName`
// and splices each replacement in source order. tsgo emits one output per
// source file; we map `dist/foo/bar.js` back to `src/foo/bar.ts` by matching
// the base-name against the rewrite set's known files.
func applyRewrites(outputName, text string, rs *RewriteSet, cursors map[string]int) (string, error) {
	srcPath, ok := findSourceForOutput(outputName, rs)
	if !ok || len(rs.byPath[srcPath]) == 0 {
		return text, nil
	}
	rewrites := rs.byPath[srcPath]
	pos := cursors[srcPath]
	out := text
	for pos < len(rewrites) {
		r := rewrites[pos]
		replaced, ok, err := spliceCall(out, r)
		if err != nil {
			return "", err
		}
		if !ok {
			// Ran out of matching call patterns — bail at the first miss so
			// we don't silently corrupt output. Phase 1 will tighten this
			// using source-map anchoring.
			preview := out
			if len(preview) > 400 {
				preview = preview[:400] + "…"
			}
			return "", fmt.Errorf("driver: could not locate %s.%s(…) call in %s (tried roots %v; preview: %q)", joinRootAndNamespaces(r), r.Method, outputName, candidateRoots(r.RootName), preview)
		}
		out = replaced
		pos++
	}
	cursors[srcPath] = pos
	return out, nil
}

// findSourceForOutput returns the absolute path of the source file tsgo
// compiled into outputName. tsgo mirrors the rootDir layout under outDir, so
// the longest shared suffix (ignoring extension) uniquely identifies the
// source even when multiple `.ts` files share a basename across directories.
func findSourceForOutput(outputName string, rs *RewriteSet) (string, bool) {
	outSlash := strings.TrimSuffix(filepath.ToSlash(outputName), filepath.Ext(outputName))

	var best string
	bestScore := 0
	for path := range rs.byPath {
		srcStem := strings.TrimSuffix(filepath.ToSlash(path), filepath.Ext(path))
		score := commonSuffixSegments(srcStem, outSlash)
		if score > bestScore {
			best = path
			bestScore = score
		}
	}
	return best, bestScore > 0
}

// commonSuffixSegments counts the number of trailing `/`-delimited segments
// that a and b share. `a/b/foo` vs `x/b/foo` returns 2.
func commonSuffixSegments(a, b string) int {
	as := strings.Split(a, "/")
	bs := strings.Split(b, "/")
	n := len(as)
	if len(bs) < n {
		n = len(bs)
	}
	shared := 0
	for i := 1; i <= n; i++ {
		if as[len(as)-i] != bs[len(bs)-i] {
			break
		}
		shared++
	}
	return shared
}

// spliceCall finds the next occurrence of `<root>.<ns>...<method>(` in text
// and replaces *just the callable part* (everything from the root identifier
// up to but not including the `(`). The caller is responsible for providing
// a replacement that, together with the surviving `(<arg>)` tail emitted by
// tsgo, yields a syntactically valid call expression — typically a
// parenthesised arrow function such as `((input) => "string" === typeof input)`.
//
// Returns (newText, true, nil) on success or (text, false, nil) when not
// found. The caller treats a miss as "give up" — Phase 1 will upgrade this
// with source-map anchoring.
func spliceCall(text string, r Rewrite) (string, bool, error) {
	aliases := candidateRoots(r.RootName)
	tail := needleTail(r) // `.json.stringify(` or `.is(`
	idx := -1
	needleLen := 0
	for _, cand := range aliases {
		candNeedle := cand + tail
		if i := indexAtCallStart(text, candNeedle); i >= 0 {
			idx = i
			needleLen = len(candNeedle) - 1 // exclude the `(` so we preserve it
			break
		}
	}
	if idx < 0 {
		return text, false, nil
	}
	// Sanity-check: matchParen confirms we really did hit a call expression.
	parenPos := idx + needleLen
	if parenPos >= len(text) || text[parenPos] != '(' {
		return text, false, errors.New("driver: expected '(' after method name")
	}
	closePos, ok := matchParen(text, parenPos)
	if !ok {
		return text, false, errors.New("driver: unbalanced parens while locating typia call")
	}
	if r.ConsumeParens {
		// Factory methods: swallow the whole `createX()` invocation so the
		// replacement is treated as a standalone value.
		return text[:idx] + r.Replacement + text[closePos+1:], true, nil
	}
	return text[:idx] + r.Replacement + text[idx+needleLen:], true, nil
}

// candidateRoots returns the likely JS names for a typescript default import
// called `root`. tsgo's emit varies with moduleFormat/esModuleInterop:
//
//   - esm:                        `typia.is(x)`
//   - commonjs + esModuleInterop: `typia_1.default.is(x)` (importDefault wrap)
//   - commonjs:                   `typia_1.is(x)` (direct)
func candidateRoots(root string) []string {
	return []string{
		// esm-shaped first (shortest, most specific)
		root,
		// commonjs with esModuleInterop (most common for typia users)
		root + "_1.default",
		root + "_2.default",
		root + ".default",
		// commonjs without esModuleInterop
		root + "_1",
		root + "_2",
	}
}

// joinRootAndNamespaces emits `typia.json` for a nested rewrite or just
// `typia` at the top level.
func joinRootAndNamespaces(r Rewrite) string {
	if len(r.Namespaces) == 0 {
		return r.RootName
	}
	return r.RootName + "." + strings.Join(r.Namespaces, ".")
}

// needleTail returns the portion of the call-site needle after the root
// identifier so we can prepend different root candidates.
func needleTail(r Rewrite) string {
	if len(r.Namespaces) == 0 {
		return "." + r.Method + "("
	}
	return "." + strings.Join(r.Namespaces, ".") + "." + r.Method + "("
}

// indexAtCallStart finds `needle` in text where the character *before* it
// is not part of a longer identifier (so `mytypia.is(` does not match when
// we search for `typia.is(`).
func indexAtCallStart(text, needle string) int {
	start := 0
	for {
		hit := strings.Index(text[start:], needle)
		if hit < 0 {
			return -1
		}
		pos := start + hit
		if pos == 0 {
			return pos
		}
		prev := rune(text[pos-1])
		if isIdentifierPart(prev) {
			start = pos + 1
			continue
		}
		return pos
	}
}

func isIdentifierPart(r rune) bool {
	return r == '_' || r == '$' || unicode.IsLetter(r) || unicode.IsDigit(r)
}

// matchParen returns the byte index of the `)` that closes the `(` at pos.
// Recognises nested parens, but does NOT handle string / regex / comment
// edge cases — Phase 1 upgrades this with a real JS tokenizer.
func matchParen(text string, pos int) (int, bool) {
	if pos >= len(text) || text[pos] != '(' {
		return 0, false
	}
	depth := 1
	for i := pos + 1; i < len(text); i++ {
		switch text[i] {
		case '(':
			depth++
		case ')':
			depth--
			if depth == 0 {
				return i, true
			}
		case '"', '\'', '`':
			// Naive string skip — good enough for Phase 0 fixtures.
			q := text[i]
			j := i + 1
			for j < len(text) && text[j] != q {
				if text[j] == '\\' {
					j++
				}
				j++
			}
			i = j
		}
	}
	return 0, false
}
