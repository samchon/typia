package helpers

func Disable_function_programmer_declare(functor *FunctionProgrammer) *FunctionProgrammer {
	if functor == nil {
		return nil
	}
	disabled := *functor
	disabled.disableDeclare = true
	return &disabled
}
