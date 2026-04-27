package helpers

type DisabledFunctionProgrammer struct {
	Origin *FunctionProgrammer
}

func DisableFunctionProgrammerDeclare(programmer *FunctionProgrammer) DisabledFunctionProgrammer {
	return DisabledFunctionProgrammer{Origin: programmer}
}

func (p DisabledFunctionProgrammer) UseLocal(name string) string {
	return p.Origin.UseLocal(name)
}

func (p DisabledFunctionProgrammer) HasLocal(name string) bool {
	return p.Origin.HasLocal(name)
}

func (p DisabledFunctionProgrammer) Declare(name string, body ConciseBody) {}

func (p DisabledFunctionProgrammer) DeclareUnions() []Statement { return nil }

func (p DisabledFunctionProgrammer) Increment() int {
	return p.Origin.Increment()
}

func (p DisabledFunctionProgrammer) EmplaceUnion(prefix string, body []Statement) string {
	return p.Origin.EmplaceUnion(prefix, body)
}

func (p DisabledFunctionProgrammer) EmplaceVariable(prefix string, value Expression) string {
	return p.Origin.EmplaceVariable(prefix, value)
}
