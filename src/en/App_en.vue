<script setup>
  import { ref } from 'vue';  

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

  function download(e) {
    const downloadUrl = e.currentTarget.querySelector("a").href;
    window.open(downloadUrl);
  }

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
      <div class="download-item" @click="download" style="width: auto;">
        <a href="https://play.google.com/store/apps/details?id=me.zhangjh.smart.search.en" target="_blank"></a>
        <svg t="1691318721606" class="icon" viewBox="0 0 3456 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1464" width="128"><path d="M3328 20.48a107.52 107.52 0 0 1 107.52 107.52v768a107.52 107.52 0 0 1-107.52 107.52H128A107.52 107.52 0 0 1 20.48 896V128A107.52 107.52 0 0 1 128 20.48h3200m0-20.48H128a128.384 128.384 0 0 0-128 128v768a128.384 128.384 0 0 0 128 128h3200a128.384 128.384 0 0 0 128-128V128a128.384 128.384 0 0 0-128-128zM1214.976 248.064h-79.104v23.552h55.552a45.2096 45.2096 0 0 1-12.032 26.88 55.9616 55.9616 0 0 1-40.96 16.384 58.88 58.88 0 0 1 0-117.76 48.4864 48.4864 0 0 1 39.936 17.408l2.048 2.048 16.896-17.152-1.28-1.792a65.2544 65.2544 0 0 0-25.088-17.664 78.6688 78.6688 0 0 0-32.512-6.656 82.688 82.688 0 1 0 0 165.376 77.5168 77.5168 0 0 0 58.112-23.296 72.2432 72.2432 0 0 0 19.968-53.248 66.3552 66.3552 0 0 0-1.28-12.032z m24.576 87.296h94.976v-24.064H1264.64v-43.52h62.976v-23.552H1264.64v-43.52h69.888V176.64h-94.976v158.72z m110.336-134.656h43.008v134.656h24.832V200.704h42.752V176.64h-110.592v24.064z m182.016 134.656h24.832V176.64h-24.832v158.72z m44.544-134.656h43.008v134.656h24.832V200.704h42.752V176.64h-110.592v24.064z m251.648-27.392a77.2608 77.2608 0 0 0-58.112 24.064 85.4016 85.4016 0 0 0 0 117.248 82.2016 82.2016 0 0 0 116.224 0 85.4016 85.4016 0 0 0 0-117.248 78.0544 78.0544 0 0 0-58.112-24.064z m0 141.568a54.1184 54.1184 0 0 1-39.936-16.64 62.6432 62.6432 0 0 1 0-84.48 56.32 56.32 0 0 1 79.872 0 62.6432 62.6432 0 0 1 0 84.48 54.1184 54.1184 0 0 1-39.936 16.64z m202.752-138.24v92.416l0.512 21.76-71.168-114.176h-27.904v158.72h24.832V237.056l-0.768-21.504 73.984 118.528 0.768 1.28h24.576V176.64h-24.832zM1744.384 556.8A108.928 108.928 0 1 0 1853.696 665.6a107.2384 107.2384 0 0 0-109.312-108.8z m0 174.848a66.0736 66.0736 0 1 1 61.44-66.048 62.9248 62.9248 0 0 1-61.44 66.048z m-238.592-174.848A108.928 108.928 0 1 0 1615.104 665.6a107.392 107.392 0 0 0-109.312-108.8z m0 174.848a66.0736 66.0736 0 1 1 61.44-66.048 62.9248 62.9248 0 0 1-61.44 66.048z m-283.648-141.312v46.08h110.592a96.4864 96.4864 0 0 1-25.088 58.112 113.1264 113.1264 0 0 1-85.504 33.792 122.88 122.88 0 0 1 0-245.76A118.272 118.272 0 0 1 1305.6 515.584l32.512-32.512a161.28 161.28 0 0 0-115.968-46.592 169.1136 169.1136 0 1 0 0 338.176 155.264 155.264 0 0 0 118.016-47.36 153.3696 153.3696 0 0 0 39.936-108.288 160.5632 160.5632 0 0 0-2.304-28.672h-155.648z m1159.936 35.84a101.0176 101.0176 0 0 0-93.184-69.376A103.5264 103.5264 0 0 0 2186.24 665.6a108.3904 108.3904 0 0 0 198.656 60.672l-37.12-24.576a62.2592 62.2592 0 0 1-53.504 29.952 54.9888 54.9888 0 0 1-52.736-33.024l145.664-60.16z m-148.48 36.352a59.9296 59.9296 0 0 1 57.088-63.744 41.8048 41.8048 0 0 1 40.192 23.296zM2115.328 768h47.872V448h-47.872V768z m-78.336-186.88h-1.792a75.264 75.264 0 0 0-57.344-24.32 109.0304 109.0304 0 0 0 0 217.856 73.7792 73.7792 0 0 0 57.344-24.832h1.792v15.616c0 41.728-22.272 64-58.112 64a60.3392 60.3392 0 0 1-55.04-38.656l-41.472 17.152a103.3728 103.3728 0 0 0 96.512 64.512c56.064 0 103.424-33.024 103.424-113.408v-195.584h-45.312v17.664z m-55.04 150.528a66.176 66.176 0 0 1 0-131.84 66.4064 66.4064 0 0 1 0 131.84z m624.384-283.648h-114.688V768h47.872v-121.344h66.816a99.4816 99.4816 0 1 0 0-198.656z m1.024 154.112H2539.52v-109.568h67.84a54.8096 54.8096 0 1 1 0 109.568z m295.424-45.824a89.3952 89.3952 0 0 0-85.248 48.896l42.24 17.664a45.568 45.568 0 0 1 43.776-23.296 46.08 46.08 0 0 1 50.176 41.216v3.072a106.9056 106.9056 0 0 0-49.92-12.288c-45.568 0-92.16 25.088-92.16 72.192a73.9584 73.9584 0 0 0 79.616 70.4 67.7632 67.7632 0 0 0 60.928-31.488h1.536v24.832h46.08v-122.624c0-56.832-42.496-88.576-97.024-88.576z m-5.888 175.36a33.28 33.28 0 0 1-37.376-27.136c0-24.832 27.136-34.304 50.688-34.304a85.0176 85.0176 0 0 1 43.52 10.752 57.7792 57.7792 0 0 1-56.832 50.688zM3167.744 563.2l-54.784 138.752h-1.536L3054.592 563.2h-51.456l85.248 194.048-48.64 107.776h49.92L3220.992 563.2h-53.248z m-430.08 204.8h47.616V448h-47.616V768zM255.232 513.536V240.384a179.584 179.584 0 0 1 0.768-23.552 25.0624 25.0624 0 0 1 12.032-21.504c9.216-3.84 12.8 6.656 17.92 11.776l294.912 302.592a17.0752 17.0752 0 0 1-0.512 29.696c-95.232 95.488-189.952 191.744-284.928 287.488-17.408 17.408-32.512 13.568-38.656-10.752a100.9408 100.9408 0 0 1-1.28-23.296c-0.256-93.184-0.256-186.112-0.256-279.296z m39.424-326.912a34.4064 34.4064 0 0 1 22.528 7.936c123.136 69.632 245.76 139.52 368.896 208.64 14.592 8.192 17.152 13.824 3.84 26.112-24.832 23.296-48.128 48.128-72.192 72.448-6.144 6.144-11.008 9.984-18.944 1.536q-151.296-156.672-303.104-313.344a8.1664 8.1664 0 0 1-1.024-3.328z m38.656 632.832c88.064-90.112 173.824-177.408 258.56-265.472 13.056-13.312 20.224-13.312 32.256 0.256a757.76 757.76 0 0 0 54.784 56.32c11.52 11.008 12.288 16.384-3.328 24.832-101.632 55.552-202.496 112.128-303.616 168.192a78.2848 78.2848 0 0 1-38.656 15.872z m521.984-303.104a30.1824 30.1824 0 0 1-16.128 26.624c-40.448 23.04-80.896 45.568-121.088 68.608a13.568 13.568 0 0 1-18.688-4.608c-23.04-24.064-46.08-48.128-69.632-71.68a11.4944 11.4944 0 0 1 0.256-19.456q40.96-40.704 81.408-82.176a15.616 15.616 0 0 1 22.016-3.584c33.792 19.968 67.84 39.168 101.888 58.368a33.28 33.28 0 0 1 19.968 27.904z" fill="" p-id="1465"></path></svg>
      </div>
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
