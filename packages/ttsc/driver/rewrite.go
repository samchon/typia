// Package driver: post-emit rewriter.
//
// tsgo emits `.js` with plugin-owned call expressions preserved as-is because
// the compile-time transformer stage is now hosted outside the native
// compiler. This file implements the emit-time rewrite pattern pioneered by
// tsgonest: we hook tsgo's Emit() via its WriteFile callback, locate each
// previously-recognised plugin call in the emitted JS, and replace the call
// expression with the JS the native consumer produced.
//
// The rewriter operates on the output text only — it relies on the caller
// having already produced an ordered list of (file, call, emittedJS) triples.
// Today we match by textual pattern (`<alias>.<method>(...)`), which is safe
// because the compiler-stripped call site is distinctive.
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
	File          *ast.SourceFile
	RootName      string
	Namespaces    []string
	Method        string
	Replacement   string
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
// re-running the emit on an already-rewritten file is a no-op.
const RewriteSentinel = "/* @ttsc-rewritten */"

// EmitAll runs tsgo's emitter, patching every registered plugin-owned call in
// the output. Returns the tsgo diagnostics and any patch-time error. When
// `writeFile` is nil, the patched JS is written to disk via the standard
// tsgo WriteFile.
func (p *Program) EmitAll(rs *RewriteSet, writeFile shimcompiler.WriteFile) (*shimcompiler.EmitResult, []Diagnostic, error) {
	if p == nil || p.TSProgram == nil {
		return nil, nil, errors.New("driver: nil program")
	}
	if rs == nil {
		rs = NewRewriteSet()
	}
	cursors := map[string]int{}
	wf := func(fileName, text string, data *shimcompiler.WriteFileData) error {
		if strings.Contains(text, RewriteSentinel) {
			if writeFile != nil {
				return writeFile(fileName, text, data)
			}
			return DefaultWriteFile(fileName, text)
		}
		patched, err := applyRewrites(fileName, text, rs, cursors)
		if err != nil {
			return err
		}
		if patched != text {
			patched = insertSentinel(patched)
		}
		if writeFile != nil {
			return writeFile(fileName, patched, data)
		}
		return DefaultWriteFile(fileName, patched)
	}

	result := p.TSProgram.Emit(context.Background(), shimcompiler.EmitOptions{
		WriteFile: wf,
	})
	if result == nil {
		return nil, nil, errors.New("driver: Emit returned nil")
	}
	return result, convertDiagnostics(result.Diagnostics), nil
}

// DefaultWriteFile is the default disk writer used when EmitAll's caller does not
// supply a custom WriteFile hook.
func DefaultWriteFile(fileName, text string) error {
	if dir := filepath.Dir(fileName); dir != "" {
		if err := os.MkdirAll(dir, 0o755); err != nil {
			return err
		}
	}
	return os.WriteFile(fileName, []byte(text), 0o644)
}

func insertSentinel(text string) string {
	for _, prefix := range []string{"\"use strict\";\n", "'use strict';\n"} {
		if strings.HasPrefix(text, prefix) {
			return prefix + RewriteSentinel + "\n" + text[len(prefix):]
		}
	}
	return RewriteSentinel + "\n" + text
}

func applyRewrites(outputName, text string, rs *RewriteSet, cursors map[string]int) (string, error) {
	srcPath, ok := findSourceForOutput(outputName, rs)
	if !ok || len(rs.byPath[srcPath]) == 0 {
		return text, nil
	}
	rewrites := rs.byPath[srcPath]
	pos := cursors[srcPath]
	out := text
	searchFrom := 0
	for pos < len(rewrites) {
		r := rewrites[pos]
		replaced, nextSearchFrom, ok, err := spliceCall(out, r, searchFrom)
		if err != nil {
			return "", err
		}
		if !ok {
			preview := out
			if len(preview) > 400 {
				preview = preview[:400] + "…"
			}
			return "", fmt.Errorf("driver: could not locate %s.%s(…) call in %s (tried roots %v; preview: %q)", joinRootAndNamespaces(r), r.Method, outputName, candidateRoots(r.RootName), preview)
		}
		out = replaced
		searchFrom = nextSearchFrom
		pos++
	}
	cursors[srcPath] = pos
	return out, nil
}

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

func spliceCall(text string, r Rewrite, searchFrom int) (string, int, bool, error) {
	aliases := candidateRoots(r.RootName)
	tail := needleTail(r)
	idx := -1
	needleLen := 0
	for _, cand := range aliases {
		candNeedle := cand + tail
		if i := indexAtCallStart(text, candNeedle, searchFrom); i >= 0 {
			idx = i
			needleLen = len(candNeedle) - 1
			break
		}
	}
	if idx < 0 {
		return text, searchFrom, false, nil
	}
	parenPos := idx + needleLen
	if parenPos >= len(text) || text[parenPos] != '(' {
		return text, searchFrom, false, errors.New("driver: expected '(' after method name")
	}
	closePos, ok := matchParen(text, parenPos)
	if !ok {
		return text, searchFrom, false, errors.New("driver: unbalanced parens while locating plugin call")
	}
	if r.ConsumeParens {
		replaced := text[:idx] + r.Replacement + text[closePos+1:]
		return replaced, idx + len(r.Replacement), true, nil
	}
	replaced := text[:idx] + r.Replacement + text[idx+needleLen:]
	return replaced, idx + len(r.Replacement), true, nil
}

func candidateRoots(root string) []string {
	return []string{
		root,
		root + "_1.default",
		root + "_2.default",
		root + ".default",
		root + "_1",
		root + "_2",
	}
}

func joinRootAndNamespaces(r Rewrite) string {
	if len(r.Namespaces) == 0 {
		return r.RootName
	}
	return r.RootName + "." + strings.Join(r.Namespaces, ".")
}

func needleTail(r Rewrite) string {
	if len(r.Namespaces) == 0 {
		return "." + r.Method + "("
	}
	return "." + strings.Join(r.Namespaces, ".") + "." + r.Method + "("
}

func indexAtCallStart(text, needle string, searchFrom int) int {
	start := searchFrom
	if start < 0 {
		start = 0
	}
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
