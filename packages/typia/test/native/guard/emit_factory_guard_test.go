package guard

import (
  "os"
  "path/filepath"
  "regexp"
  "runtime"
  "strings"
  "testing"
)

// directBypass matches a direct call to a package-local standalone node factory,
// i.e. `something_factory.NewYyy(...)`. After the emit-factory unification every
// node MUST be created through the resolver (`f := nativecontext.EmitFactoryOf(
// X_factory, ctx); f.NewYyy(...)` or the required-ec `EmitFactory(ec, X_factory)`),
// so that a node carries emit metadata whenever a context is available. A direct
// `X_factory.New...` call bypasses that resolver and can never carry metadata —
// this guard fails the build if any reappears, so future code cannot silently
// opt out of EmitFactory.
//
// Not matched (legitimate): the `var X_factory = shimast.NewNodeFactory(...)`
// fallback declarations; passing `X_factory` as an argument to EmitFactoryOf /
// EmitFactory / NewNodeVisitor; and the emit-context's own factory
// (`p.emit_.Factory.New...` / `ec.Factory.New...`), which is `.Factory.New`,
// not `_factory.New`.
var directBypass = regexp.MustCompile(`\b[a-zA-Z_][a-zA-Z0-9_]*_factory\.New[A-Z]`)

func TestNoDirectFactoryBypass(t *testing.T) {
  _, thisFile, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("cannot resolve test file path")
  }
  // packages/typia/test/native/guard/<this> -> packages/typia/native
  nativeRoot := filepath.Clean(filepath.Join(filepath.Dir(thisFile), "..", "..", "..", "native"))
  if _, err := os.Stat(nativeRoot); err != nil {
    t.Fatalf("native source root not found at %s: %v", nativeRoot, err)
  }

  var violations []string
  err := filepath.WalkDir(nativeRoot, func(path string, d os.DirEntry, err error) error {
    if err != nil {
      return err
    }
    if d.IsDir() {
      return nil
    }
    if !strings.HasSuffix(path, ".go") || strings.HasSuffix(path, "_test.go") {
      return nil
    }
    data, readErr := os.ReadFile(path)
    if readErr != nil {
      return readErr
    }
    rel, _ := filepath.Rel(nativeRoot, path)
    for i, line := range strings.Split(string(data), "\n") {
      // strip a line comment so prose mentioning the pattern is not flagged;
      // a real call before `//` on the same line is kept.
      code := line
      if idx := strings.Index(code, "//"); idx >= 0 {
        code = code[:idx]
      }
      if directBypass.MatchString(code) {
        violations = append(violations, rel+":"+itoa(i+1)+"  "+strings.TrimSpace(line))
      }
    }
    return nil
  })
  if err != nil {
    t.Fatalf("walking native source: %v", err)
  }
  if len(violations) != 0 {
    t.Fatalf("found %d direct standalone-factory node creation(s) that bypass EmitFactory.\n"+
      "Route node creation through nativecontext.EmitFactoryOf(X_factory, ctx) / EmitFactory(ec, X_factory) instead of calling X_factory.New... directly:\n  %s",
      len(violations), strings.Join(violations, "\n  "))
  }
}

func itoa(n int) string {
  if n == 0 {
    return "0"
  }
  var b [20]byte
  i := len(b)
  for n > 0 {
    i--
    b[i] = byte('0' + n%10)
    n /= 10
  }
  return string(b[i:])
}
