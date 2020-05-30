// pages/image/image.js
Page({
  data:{
    selImgs:[]
  },
  finishpic(){
    console.log("pic load finish")
  },
  handleChooseAlbum(){
    const _this=this
    // 系统api让用户选择相片/拍照
    wx.chooseImage({
      complete: (res) => {
        console.log(res)
        _this.setData({
          selImgs:res.tempFiles
        })
      },
    })
  }
  
})