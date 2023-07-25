<script setup>
  import { ref } from 'vue';  

  function startDownload() {
    window.open("https://www.baidu.com");
  }

  let mouseX = ref(0);
  let mouseY = ref(0);
  const defaultWechatImgStyle = {
    display: 'none'
  };
  const defaultMailStyle = {
    display: 'none'
  };
  let wechatImgStyle = ref(defaultWechatImgStyle);
  let mailStyle = ref(defaultMailStyle);

  function showMail(e) {
    e.stopPropagation();
    mouseX.value = e.clientX + window.scrollX;  
    mouseY.value = e.clientY - 100 + window.scrollY;  
    mailStyle.value = ref({
      position: 'absolute',
      left: (mouseX.value + 20) + 'px',
      top: (mouseY.value) + 'px'
    });
    document.addEventListener('click', hideMail, {once: true});
  }

  const showWechat = (e) => {
    e.stopPropagation();
    mouseX.value = e.clientX + window.scrollX;  
    mouseY.value = e.clientY - 100 + window.scrollY;  
    let left = (mouseX.value + 20) + 'px';
    let top = (mouseY.value) + 'px';
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    if(viewportWidth < 1024) {
      // 75是图片宽度的一半
      left = (viewportWidth / 2) - 75 + window.scrollX + 'px';
      top = (viewportHeight / 2) + window.scrollY + 'px';
    }
    wechatImgStyle.value = {
      position: 'absolute',
      left,
      top
    };
    document.addEventListener('click', hideWechat, {once: true});
  };

  const hideMail = () => {
    mailStyle.value = defaultMailStyle;
  };

  const hideWechat = () => {
    wechatImgStyle.value = defaultWechatImgStyle;
  };

</script>

<template>
  <div class="main-content">
    <div class="logo-wrap">
      <img src="/src/assets/慧搜logo.png" alt="慧搜" />
      <div class="desc">
        <div class="title">慧搜--AI文图搜索，快速定位记忆的瞬间</div>
        <div class="keyword">
          <div class="item">OpenAI<br>强力模型</div>
          <div class="item">语义检索<br>秒出结果</div>
          <div class="item">无需联网<br>本地运行</div>
        </div>
      </div>
    </div>

    <div class="product-desc-wrap">
      <div>慧搜是一个基于OpenAI的智能文图搜索应用程序，完全运行在手机本地环境，不需要连接互联网。
        它可以支持使用文本关键词、照片描述甚至照片分类信息等文本来快速定位手机图片。<br></div>
      <div>你一定遇到过这样的时候：突然想起来曾经有一张很有趣的图，它就躺在你的手机相册里，但是奈何相册图片实在太多翻不过来。<br></div>
      <div>使用慧搜，你可以使用任何你能想到的关于图片的描述信息来寻找你想要的某张图片。如”红色的花“、”可爱的小朋友“、”两个人的合照“、”傍晚的夕阳“、”海边看日出“、”表情包“、”结婚啦“……<br></div>
      <div>而这一切，都仅仅发生在你的设备本地，它不需要联网，你也不用担心隐私泄露，你的相册、你的搜索，只有你知道。</div>
    </div>

    <div class="image-show-wrap">
      <div class="item">
        <img src="/src/assets/ss1.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss2.jpeg" />
      </div>
      <div class="item">
        <img src="/src/assets/ss3.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss4.png" />
      </div>
      <div class="item">
        <img src="/src/assets/ss5.png" />
      </div>
    </div>

    <div class="video-show-wrap">
      <div class="item">
        <p>构建索引：</p>
        <video src="/src/assets/索引构建.mov" controls>  
          您的浏览器不支持 HTML5 视频。  
        </video>  
      </div>
      <div class="item">
        <p>图片检索：</p>
        <video src="/src/assets/检索.mov" controls>  
          您的浏览器不支持 HTML5 视频。  
        </video>  
      </div>
    </div>

    <div class="download-wrap">
      <button @click="startDownload">下载</button>
    </div>

    <div class="footer">
      <div class="contact-wrap">
        <div>联系方式：</div>
        <div class="contact-item mail" @click="showMail" @blur="hideMail">
          <svg t="1690249961516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11363" width="32" height="32"><path d="M870.4 192h-130.133333c-40.533333 0-49.066667 14.933333-49.066667 14.933333l-174.933333 245.333334s-142.933333-206.933333-166.4-234.666667C324.266667 187.733333 294.4 192 294.4 192H151.466667L21.333333 855.466667c174.933333-44.8 213.333333-149.333333 213.333334-149.333334l51.2-283.733333 230.4 315.733333 217.6-313.6s40.533333 221.866667 72.533333 300.8c32 78.933333 196.266667 130.133333 196.266667 130.133334L870.4 192z" fill="#d81e06" p-id="11364"></path></svg>        </div>
        <div class="contact-item wechat" @click="showWechat" @blur="hideWechat">
          <svg t="1690249656734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4927" width="32" height="32"><path d="M704 397.92c-15.04-140.96-151.04-251.36-316.48-251.36-176 0-317.92 124.16-317.92 277.28a267.36 267.36 0 0 0 129.12 224c8.8 5.6-29.12 85.28-19.68 90.08s28.48-11.2 48.8-26.56 39.52-29.76 48-26.88a362.56 362.56 0 0 0 112 17.44 376.16 376.16 0 0 0 57.44-4.48c36.96 84.8 133.44 145.44 246.56 145.44a305.12 305.12 0 0 0 88.16-12.96c4.48-1.28 21.76 11.36 39.2 24.16s35.36 25.76 39.68 24c13.76-5.76-25.44-69.92-12.96-77.44 65.76-40.48 108.48-105.92 108.48-180-0.16-120-111.04-217.12-250.4-222.72z m-109.12 167.2a28 28 0 1 1 27.68-28 27.84 27.84 0 0 1-27.68 28z m-165.76 54.72a204.64 204.64 0 0 0 1.44 24.32 314.72 314.72 0 0 1-42.88 2.88 302.08 302.08 0 0 1-103.36-17.76c-3.2-1.12-14.4-4.64-20.48 0a265.28 265.28 0 0 0-32 32 142.4 142.4 0 0 0 8.96-38.4c1.12-10.24-14.56-17.6-17.76-19.68a220 220 0 0 1-98.08-178.4c0-122.88 117.6-222.4 262.72-222.4 135.36 0 246.88 86.72 260.96 198.24-124.48 17.44-219.52 108.96-219.52 219.2z m331.68-54.72a28 28 0 1 1 27.68-28 27.68 27.68 0 0 1-27.68 28z" fill="#8DC81B" p-id="4928"></path><path d="M498.24 286.08a41.92 41.92 0 1 0 41.44 41.92 41.76 41.76 0 0 0-41.44-41.92zM276.96 286.08a41.92 41.92 0 1 0 41.6 41.92 41.6 41.6 0 0 0-41.6-41.92z" fill="#8DC81B" p-id="4929"></path></svg>
        </div>
      </div>
      <div class="help-wrap">
        <a class="privacy" href="/privacy.html">隐私声明</a>
        <a class="user-guide" href="/guide.html">使用说明</a>
      </div>
    </div>
  </div>

  <div class="wechat-container">
    <img src="/src/assets/wechat.jpeg" :style="wechatImgStyle" />
  </div>
  <div class="mail-container">
    <div :style="mailStyle">zhangjh_initial@126.com</div>
  </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.wechat-container, .mail-container {
  display: flex;
}

.wechat-container img {
  width: 150px;
  height: auto;
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
