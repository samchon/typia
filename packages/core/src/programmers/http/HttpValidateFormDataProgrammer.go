package http

var HttpValidateFormDataProgrammer = httpValidateFormDataProgrammerNamespace{}

type httpValidateFormDataProgrammerNamespace struct{}

func (httpValidateFormDataProgrammerNamespace) Write(typeText string) string {
	return httpValidateWrap(httpDecodeFormDataFunction(), typeText)
}
