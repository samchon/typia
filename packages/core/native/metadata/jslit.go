package metadata

// literalName emits a JS-flavored source form for a constant literal.
// String values gain surrounding quotes, bigints get the `n` suffix.
func literalName(k AtomicKind, v any) string {
	switch k {
	case AtomicString:
		if s, ok := v.(string); ok {
			return `"` + s + `"`
		}
	case AtomicBigint:
		return jsString(v) + "n"
	}
	return jsString(v)
}

// jsString renders a scalar value in JS source form without reaching for
// strconv / fmt — keeps the metadata package free of stdlib formatting deps.
func jsString(v any) string {
	switch t := v.(type) {
	case string:
		return `"` + t + `"`
	case bool:
		if t {
			return "true"
		}
		return "false"
	case int:
		return intString(int64(t))
	case int8:
		return intString(int64(t))
	case int16:
		return intString(int64(t))
	case int32:
		return intString(int64(t))
	case int64:
		return intString(t)
	case uint:
		return uintString(uint64(t))
	case uint8:
		return uintString(uint64(t))
	case uint16:
		return uintString(uint64(t))
	case uint32:
		return uintString(uint64(t))
	case uint64:
		return uintString(t)
	case float32:
		f := float64(t)
		if f == float64(int64(f)) {
			return intString(int64(f))
		}
		return floatFormatG(f)
	case float64:
		if t == float64(int64(t)) {
			return intString(int64(t))
		}
		return floatFormatG(t)
	case interface{ String() string }:
		return t.String()
	}
	return ""
}

func uintString(n uint64) string {
	if n == 0 {
		return "0"
	}
	var tmp [20]byte
	i := len(tmp)
	for n > 0 {
		i--
		tmp[i] = byte('0' + n%10)
		n /= 10
	}
	return string(tmp[i:])
}

// intString renders an integer in base-10 without `strconv` so the metadata
// package stays dependency-free (except stdlib `sort` / `strings`).
func intString(n int64) string {
	if n == 0 {
		return "0"
	}
	neg := n < 0
	if neg {
		n = -n
	}
	var tmp [20]byte
	i := len(tmp)
	for n > 0 {
		i--
		tmp[i] = byte('0' + n%10)
		n /= 10
	}
	if neg {
		i--
		tmp[i] = '-'
	}
	return string(tmp[i:])
}
