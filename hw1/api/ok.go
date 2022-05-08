package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetOk(c *gin.Context) {
	c.String(http.StatusOK, "ok you good!")
}
