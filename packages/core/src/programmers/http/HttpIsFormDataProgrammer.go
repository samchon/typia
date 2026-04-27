package http

var HttpIsFormDataProgrammer = httpIsFormDataProgrammerNamespace{}

type httpIsFormDataProgrammerNamespace struct{}

func (httpIsFormDataProgrammerNamespace) Write(typeText string) string {
	return httpIsWrap(httpDecodeFormDataFunction(), typeText)
}
