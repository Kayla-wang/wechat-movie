


function queryRequest(data) {
  wx.request({
    url: "https://example.com/api/",
    data: data,
    header: {
      // "Content-Type":"application/json"
    },
    success: function (res) {
      console.log(res.data)
    },
    fail: function (err) {
      console.log(err)
    }

  })

}