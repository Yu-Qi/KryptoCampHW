package main

import (
	"github.com/gin-gonic/gin"

	"github.com/KryptoCampHW/hw1/api"
)

func main() {
	appPort := "6666"
	r := gin.Default()

	r.GET("/ok", api.GetOk)
	r.Run(":" + appPort)
}
