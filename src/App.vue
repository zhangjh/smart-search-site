<script setup>

  function startDownload() {
    window.open("https://www.baidu.com");
  }

</script>

<template>
  <div class="main-content">
    <div class="logo-wrap">
      <img src="/src/assets/慧搜logo.png" alt="慧搜" />
      <div class="desc">
        <div class="title">慧搜：AI文图搜索，快速定位记忆的瞬间</div>
        <div class="keyword">
          <div class="item">OpenAI强力模型</div>
          <div class="item">语义检索秒出结果</div>
          <div class="item">无需联网本地运行</div>
        </div>
      </div>
    </div>

    <div class="product-desc-wrap">
      <div>慧搜是一个基于OpenAI的智能文图搜索应用程序，完全运行在手机本地环境，不需要连接互联网。
        它可以支持使用文本关键词、照片描述甚至照片分类信息等文本来快速定位手机图片。</div>
      <div>你一定遇到过这样的时候：突然想起来曾经有一张很有趣的图，它就躺在你的手机相册里，但是奈何相册图片实在太多翻不过来。</div>
      <div>使用慧搜，你可以使用任何你能想到的关于图片的描述信息来寻找你想要的某张图片。如”红色的花“、”可爱的小朋友“、”两个人的合照“、”傍晚的夕阳“、”海边看日出“、”表情包“、”结婚啦“……</div>
      <div>而这一切，都仅仅发生在你的设备本地，它不需要联网，你也不用担心隐私泄露，你的相册、你的搜索，只有你知道。</div>
    </div>

    <div class="image-show-wrap">
      <div class="item">
        <img src="/src/assets/ss1.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss1.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss1.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss1.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss1.png" />
      </div>
    </div>

    <div class="video-show-wrap">
      <div class="item">
        <p>构建索引：</p>
        <video src="/src/assets/162_1690041278.mp4" controls>  
          您的浏览器不支持 HTML5 视频。  
        </video>  
      </div>
      <div class="item">
        <p>图片检索：</p>
        <video src="/src/assets/162_1690041278.mp4" controls>  
          您的浏览器不支持 HTML5 视频。  
        </video>  
      </div>
    </div>

    <div class="download-wrap">
      <button @click="startDownload">下载</button>
    </div>

    <div class="footer">
      <div class="contact-wrap">
        <div>联系方式：zhangjh_initial@126.com</div>
      </div>
      <div class="help-wrap">
        <a class="privacy" href="/privacy.html">隐私声明</a>
        <a class="user-guide" href="/guide.html">使用说明</a>
      </div>
    </div>
  </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
