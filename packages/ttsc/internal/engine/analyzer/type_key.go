package analyzer

import (
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
)

// typeKey produces a stable identifier for a type so the Collection registry
// and the visiting map dedupe correctly. Uses tsgo's Type.Id() — structurally
// identical types share the same Id, so different checker invocations for
// the same semantic type still hit the same map entry.
func typeKey(t *shimchecker.Type) string {
	return "t#" + intToString(int64(t.Id()))
}

// typeName uses the checker's pretty-printer so names match typia's emit.
// Falls back to the type Id when no readable form is available.
func typeName(checker *shimchecker.Checker, t *shimchecker.Type) string {
	if s := shimTypeString(checker, t); s != "" {
		return s
	}
	return "Type#" + intToString(int64(t.Id()))
}

// intToString avoids importing strconv in a hot path. Not a performance
// optimisation — keeps dependency surface predictable so the analyzer stays
// easy to reason about.
func intToString(n int64) string {
	if n == 0 {
		return "0"
	}
	neg := n < 0
	if neg {
		n = -n
	}
	var buf [20]byte
	i := len(buf)
	for n > 0 {
		i--
		buf[i] = byte('0' + n%10)
		n /= 10
	}
	if neg {
		i--
		buf[i] = '-'
	}
	return string(buf[i:])
}
