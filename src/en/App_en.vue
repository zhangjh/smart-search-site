<script setup>
  import { ref } from 'vue';  

  function startDownload() {
    window.open("");
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

  const hideMail = (e) => {
    if(e.target == document.querySelector("#mail")) {
      return;
    }
    mailStyle.value = defaultMailStyle;
  };

  const hideWechat = (e) => {
    wechatImgStyle.value = defaultWechatImgStyle;
  };

</script>

<template>
  <div class="main-content">
    <div class="logo-wrap">
      <img src="/src/assets/慧搜logo.png" alt="慧搜" />
      <div class="desc">
        <div class="title">SmartSearch-AI text to image search APP</div>
        <div class="keyword">
          <div class="item">OpenAI<br>powerful model</div>
          <div class="item">Semantic retrieval<br>yields instant results</div>
          <div class="item">No internet connection required<br>runs locally</div>
        </div>
      </div>
    </div>

    <div class="product-desc-wrap">
      <div>SmartSearch is an intelligent document and image search application based on OpenAI, 
        running entirely on the local environment of the phone without the need for an internet connection. 
        It can quickly locate mobile phone pictures by using text keywords, photo descriptions, 
        or even text-based photo categorization information.<br></div>
      <div>You must have encountered moments like these: suddenly remembering a fascinating picture that lies buried in your phone's photo album among countless others.<br></div>
      <div>Using SmartSearch, you can find the specific picture you desire by using any descriptive information related to the image. 
        For example, "red flower," "adorable children," "couples' photo," "evening sunset," "watching sunrise at the beach," "expression pack," "getting married"...<br></div>
      <div>And all of this happens solely on your local device. No internet connection is required, and you need not worry about privacy breaches. 
        Your album and your searches are known only to you.</div>
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
        <p>Index Building：</p>
        <video src="/src/assets/索引构建.mov" controls>  
          Your browser does not support HTML5 video.
        </video>  
      </div>
      <div class="item">
        <p>Images Searching：</p>
        <video src="/src/assets/检索.mov" controls>  
          Your browser does not support HTML5 video.
        </video>  
      </div>
    </div>

    <div class="download-wrap">
      <button @click="startDownload">Download</button>
    </div>

    <div class="footer">
      <div class="contact-wrap">
        <div>Contact：</div>
        <div class="contact-item mail" @click="showMail" @blur="hideMail">
          <svg t="1690249961516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11363" width="32" height="32"><path d="M870.4 192h-130.133333c-40.533333 0-49.066667 14.933333-49.066667 14.933333l-174.933333 245.333334s-142.933333-206.933333-166.4-234.666667C324.266667 187.733333 294.4 192 294.4 192H151.466667L21.333333 855.466667c174.933333-44.8 213.333333-149.333333 213.333334-149.333334l51.2-283.733333 230.4 315.733333 217.6-313.6s40.533333 221.866667 72.533333 300.8c32 78.933333 196.266667 130.133333 196.266667 130.133334L870.4 192z" fill="#d81e06" p-id="11364"></path></svg>        </div>
        <div class="contact-item wechat" @click="showWechat" @blur="hideWechat">
          <svg t="1690249656734" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4927" width="32" height="32"><path d="M704 397.92c-15.04-140.96-151.04-251.36-316.48-251.36-176 0-317.92 124.16-317.92 277.28a267.36 267.36 0 0 0 129.12 224c8.8 5.6-29.12 85.28-19.68 90.08s28.48-11.2 48.8-26.56 39.52-29.76 48-26.88a362.56 362.56 0 0 0 112 17.44 376.16 376.16 0 0 0 57.44-4.48c36.96 84.8 133.44 145.44 246.56 145.44a305.12 305.12 0 0 0 88.16-12.96c4.48-1.28 21.76 11.36 39.2 24.16s35.36 25.76 39.68 24c13.76-5.76-25.44-69.92-12.96-77.44 65.76-40.48 108.48-105.92 108.48-180-0.16-120-111.04-217.12-250.4-222.72z m-109.12 167.2a28 28 0 1 1 27.68-28 27.84 27.84 0 0 1-27.68 28z m-165.76 54.72a204.64 204.64 0 0 0 1.44 24.32 314.72 314.72 0 0 1-42.88 2.88 302.08 302.08 0 0 1-103.36-17.76c-3.2-1.12-14.4-4.64-20.48 0a265.28 265.28 0 0 0-32 32 142.4 142.4 0 0 0 8.96-38.4c1.12-10.24-14.56-17.6-17.76-19.68a220 220 0 0 1-98.08-178.4c0-122.88 117.6-222.4 262.72-222.4 135.36 0 246.88 86.72 260.96 198.24-124.48 17.44-219.52 108.96-219.52 219.2z m331.68-54.72a28 28 0 1 1 27.68-28 27.68 27.68 0 0 1-27.68 28z" fill="#8DC81B" p-id="4928"></path><path d="M498.24 286.08a41.92 41.92 0 1 0 41.44 41.92 41.76 41.76 0 0 0-41.44-41.92zM276.96 286.08a41.92 41.92 0 1 0 41.6 41.92 41.6 41.6 0 0 0-41.6-41.92z" fill="#8DC81B" p-id="4929"></path></svg>
        </div>
      </div>
      <div class="help-wrap">
        <a class="privacy" href="/privacy_en.html">Privacy Policy</a>
        <a class="user-guide" href="/guide_en.html">User's Guide</a>
      </div>
    </div>
  </div>

  <div class="wechat-container">
    <img src="/src/assets/wechat.jpeg" :style="wechatImgStyle" />
  </div>
  <div class="mail-container">
    <div :style="mailStyle" id="mail">zhangjh_initial@126.com</div>
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
