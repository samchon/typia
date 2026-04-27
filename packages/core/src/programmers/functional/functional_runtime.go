package functional

func functionalIdentityWrapper() string {
	return `((func) => function(...args) { return func.apply(this, args); })`
}

func functionalAssertWrapper(mode string) string {
	switch mode {
	case "parameters":
		return `((func, errorFactory) => function(...args) { for (let i = 0; i < args.length; ++i) if (args[i] === undefined) throw makeError(errorFactory, "$input.parameters[" + i + "]", args[i]); return func.apply(this, args); })`
	case "return":
		return `((func, errorFactory) => function(...args) { const value = func.apply(this, args); return value instanceof Promise ? value.then((v) => assertReturn(v, errorFactory)) : assertReturn(value, errorFactory); function assertReturn(v, ef) { if (v === undefined) throw makeError(ef, "$input.return", v); return v; } })`
	default:
		return `((func, errorFactory) => function(...args) { for (let i = 0; i < args.length; ++i) if (args[i] === undefined) throw makeError(errorFactory, "$input.parameters[" + i + "]", args[i]); const value = func.apply(this, args); return value instanceof Promise ? value.then((v) => assertReturn(v, errorFactory)) : assertReturn(value, errorFactory); function assertReturn(v, ef) { if (v === undefined) throw makeError(ef, "$input.return", v); return v; } })`
	}
}

func functionalIsWrapper(mode string) string {
	switch mode {
	case "parameters":
		return `((func) => function(...args) { return args.some((v) => v === undefined) ? null : func.apply(this, args); })`
	case "return":
		return `((func) => function(...args) { const value = func.apply(this, args); return value instanceof Promise ? value.then((v) => v === undefined ? null : v) : value === undefined ? null : value; })`
	default:
		return `((func) => function(...args) { if (args.some((v) => v === undefined)) return null; const value = func.apply(this, args); return value instanceof Promise ? value.then((v) => v === undefined ? null : v) : value === undefined ? null : value; })`
	}
}

func functionalValidateWrapper(mode string) string {
	switch mode {
	case "parameters":
		return `((func) => function(...args) { const errors = parameterErrors(args); return errors.length ? { success: false, errors } : { success: true, data: func.apply(this, args) }; })`
	case "return":
		return `((func) => function(...args) { const value = func.apply(this, args); const validate = (v) => v === undefined ? { success: false, errors: [{ path: "$input.return", expected: "defined", value: v }] } : { success: true, data: v }; return value instanceof Promise ? value.then(validate) : validate(value); })`
	default:
		return `((func) => function(...args) { const errors = parameterErrors(args); if (errors.length) return { success: false, errors }; const value = func.apply(this, args); const validate = (v) => v === undefined ? { success: false, errors: [{ path: "$input.return", expected: "defined", value: v }] } : { success: true, data: v }; return value instanceof Promise ? value.then(validate) : validate(value); })`
	}
}

func functionalPrelude() string {
	return `function makeError(errorFactory, path, value) { const props = { method: "typia.functional", path, expected: "defined", value }; if (errorFactory) return errorFactory(props); const error = new Error("Error on typia.functional(): invalid type on " + path); error.name = "TypeGuardError"; Object.assign(error, props); return error; } function parameterErrors(args) { const errors = []; for (let i = 0; i < args.length; ++i) if (args[i] === undefined) errors.push({ path: "$input.parameters[" + i + "]", expected: "defined", value: args[i] }); return errors; }`
}

func functionalWithPrelude(body string) string {
	return `(() => { ` + functionalPrelude() + ` return ` + body + `; })()`
}
