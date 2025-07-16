<script setup>
  function download(e) {
    const downloadUrl = e.currentTarget.querySelector("a").href;
    window.open(downloadUrl);
  }
</script>

<template>
  <div class="app-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="logo-section">
          <div class="logo-container">
            <img src="/src/assets/慧搜logo.png" alt="SmartSearch" class="logo-image" />
          </div>
          <div class="hero-text">
            <h1 class="main-title">SmartSearch</h1>
            <p class="subtitle">AI text to image search APP</p>
            <div class="feature-tags">
              <span class="tag">OpenAI powerful model</span>
              <span class="tag">Semantic retrieval yields instant results</span>
              <span class="tag">No internet connection required runs locally</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description Section -->
    <section class="description-section">
      <div class="container">
        <div class="description-card">
          <h2 class="section-title">Intelligent Search at Your Fingertips</h2>
          <div class="description-content">
            <p class="highlight-text">
              SmartSearch is an intelligent document and image search application based on OpenAI, 
              running entirely on the local environment of the phone without the need for an internet connection. 
              It can quickly locate mobile phone pictures by using text keywords, photo descriptions, 
              or even text-based photo categorization information.
            </p>
            <p>
              You must have encountered moments like these: suddenly remembering a fascinating picture that lies buried in your phone's photo album among countless others.
            </p>
            <p>
              Using SmartSearch, you can find the specific picture you desire by using any descriptive information related to the image. 
              For example, "red flower," "adorable children," "couples' photo," "evening sunset," "watching sunrise at the beach," "expression pack," "getting married"...
            </p>
            <p class="privacy-text">
              And all of this happens solely on your local device. No internet connection is required, and you need not worry about privacy breaches. 
              Your album and your searches are known only to you.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Screenshots Section -->
    <section class="screenshots-section">
      <div class="container">
        <h2 class="section-title">App Screenshots</h2>
        <div class="screenshots-grid">
          <div class="screenshot-item" v-for="i in 5" :key="i">
            <img :src="`/src/assets/en/ss${i}.jpg`" :alt="`App Screenshot ${i}`" />
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="video-section">
      <div class="container">
        <h2 class="section-title">Feature Demo</h2>
        <div class="video-grid">
          <div class="video-card">
            <h3 class="video-title">Index Building</h3>
            <div class="video-container">
              <video src="/src/assets/en/构建.mp4" controls>
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
          <div class="video-card">
            <h3 class="video-title">Images Searching</h3>
            <div class="video-container">
              <video src="/src/assets/en/检索.mp4" controls>
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="download-section">
      <div class="container">
        <h2 class="section-title">Download Now</h2>
        <div class="download-container">
          <button class="download-btn" @click="download">
            <a href="https://play.google.com/store/apps/details?id=me.zhangjh.smart.search" target="_blank"></a>
            <svg class="google-play-icon" viewBox="0 0 3456 1024" xmlns="http://www.w3.org/2000/svg">
              <path d="M3328 20.48a107.52 107.52 0 0 1 107.52 107.52v768a107.52 107.52 0 0 1-107.52 107.52H128A107.52 107.52 0 0 1 20.48 896V128A107.52 107.52 0 0 1 128 20.48h3200m0-20.48H128a128.384 128.384 0 0 0-128 128v768a128.384 128.384 0 0 0 128 128h3200a128.384 128.384 0 0 0 128-128V128a128.384 128.384 0 0 0-128-128zM1214.976 248.064h-79.104v23.552h55.552a45.2096 45.2096 0 0 1-12.032 26.88 55.9616 55.9616 0 0 1-40.96 16.384 58.88 58.88 0 0 1 0-117.76 48.4864 48.4864 0 0 1 39.936 17.408l2.048 2.048 16.896-17.152-1.28-1.792a65.2544 65.2544 0 0 0-25.088-17.664 78.6688 78.6688 0 0 0-32.512-6.656 82.688 82.688 0 1 0 0 165.376 77.5168 77.5168 0 0 0 58.112-23.296 72.2432 72.2432 0 0 0 19.968-53.248 66.3552 66.3552 0 0 0-1.28-12.032z m24.576 87.296h94.976v-24.064H1264.64v-43.52h62.976v-23.552H1264.64v-43.52h69.888V176.64h-94.976v158.72z m110.336-134.656h43.008v134.656h24.832V200.704h42.752V176.64h-110.592v24.064z m182.016 134.656h24.832V176.64h-24.832v158.72z m44.544-134.656h43.008v134.656h24.832V200.704h42.752V176.64h-110.592v24.064z m251.648-27.392a77.2608 77.2608 0 0 0-58.112 24.064 85.4016 85.4016 0 0 0 0 117.248 82.2016 82.2016 0 0 0 116.224 0 85.4016 85.4016 0 0 0 0-117.248 78.0544 78.0544 0 0 0-58.112-24.064z m0 141.568a54.1184 54.1184 0 0 1-39.936-16.64 62.6432 62.6432 0 0 1 0-84.48 56.32 56.32 0 0 1 79.872 0 62.6432 62.6432 0 0 1 0 84.48 54.1184 54.1184 0 0 1-39.936 16.64z m202.752-138.24v92.416l0.512 21.76-71.168-114.176h-27.904v158.72h24.832V237.056l-0.768-21.504 73.984 118.528 0.768 1.28h24.576V176.64h-24.832zM1744.384 556.8A108.928 108.928 0 1 0 1853.696 665.6a107.2384 107.2384 0 0 0-109.312-108.8z m0 174.848a66.0736 66.0736 0 1 1 61.44-66.048 62.9248 62.9248 0 0 1-61.44 66.048z m-238.592-174.848A108.928 108.928 0 1 0 1615.104 665.6a107.392 107.392 0 0 0-109.312-108.8z m0 174.848a66.0736 66.0736 0 1 1 61.44-66.048 62.9248 62.9248 0 0 1-61.44 66.048z m-283.648-141.312v46.08h110.592a96.4864 96.4864 0 0 1-25.088 58.112 113.1264 113.1264 0 0 1-85.504 33.792 122.88 122.88 0 0 1 0-245.76A118.272 118.272 0 0 1 1305.6 515.584l32.512-32.512a161.28 161.28 0 0 0-115.968-46.592 169.1136 169.1136 0 1 0 0 338.176 155.264 155.264 0 0 0 118.016-47.36 153.3696 153.3696 0 0 0 39.936-108.288 160.5632 160.5632 0 0 0-2.304-28.672h-155.648z m1159.936 35.84a101.0176 101.0176 0 0 0-93.184-69.376A103.5264 103.5264 0 0 0 2186.24 665.6a108.3904 108.3904 0 0 0 198.656 60.672l-37.12-24.576a62.2592 62.2592 0 0 1-53.504 29.952 54.9888 54.9888 0 0 1-52.736-33.024l145.664-60.16z m-148.48 36.352a59.9296 59.9296 0 0 1 57.088-63.744 41.8048 41.8048 0 0 1 40.192 23.296zM2115.328 768h47.872V448h-47.872V768z m-78.336-186.88h-1.792a75.264 75.264 0 0 0-57.344-24.32 109.0304 109.0304 0 0 0 0 217.856 73.7792 73.7792 0 0 0 57.344-24.832h1.792v15.616c0 41.728-22.272 64-58.112 64a60.3392 60.3392 0 0 1-55.04-38.656l-41.472 17.152a103.3728 103.3728 0 0 0 96.512 64.512c56.064 0 103.424-33.024 103.424-113.408v-195.584h-45.312v17.664z m-55.04 150.528a66.176 66.176 0 0 1 0-131.84 66.4064 66.4064 0 0 1 0 131.84z m624.384-283.648h-114.688V768h47.872v-121.344h66.816a99.4816 99.4816 0 1 0 0-198.656z m1.024 154.112H2539.52v-109.568h67.84a54.8096 54.8096 0 1 1 0 109.568z m295.424-45.824a89.3952 89.3952 0 0 0-85.248 48.896l42.24 17.664a45.568 45.568 0 0 1 43.776-23.296 46.08 46.08 0 0 1 50.176 41.216v3.072a106.9056 106.9056 0 0 0-49.92-12.288c-45.568 0-92.16 25.088-92.16 72.192a73.9584 73.9584 0 0 0 79.616 70.4 67.7632 67.7632 0 0 0 60.928-31.488h1.536v24.832h46.08v-122.624c0-56.832-42.496-88.576-97.024-88.576z m-5.888 175.36a33.28 33.28 0 0 1-37.376-27.136c0-24.832 27.136-34.304 50.688-34.304a85.0176 85.0176 0 0 1 43.52 10.752 57.7792 57.7792 0 0 1-56.832 50.688zM3167.744 563.2l-54.784 138.752h-1.536L3054.592 563.2h-51.456l85.248 194.048-48.64 107.776h49.92L3220.992 563.2h-53.248z m-430.08 204.8h47.616V448h-47.616V768zM255.232 513.536V240.384a179.584 179.584 0 0 1 0.768-23.552 25.0624 25.0624 0 0 1 12.032-21.504c9.216-3.84 12.8 6.656 17.92 11.776l294.912 302.592a17.0752 17.0752 0 0 1-0.512 29.696c-95.232 95.488-189.952 191.744-284.928 287.488-17.408 17.408-32.512 13.568-38.656-10.752a100.9408 100.9408 0 0 1-1.28-23.296c-0.256-93.184-0.256-186.112-0.256-279.296z m39.424-326.912a34.4064 34.4064 0 0 1 22.528 7.936c123.136 69.632 245.76 139.52 368.896 208.64 14.592 8.192 17.152 13.824 3.84 26.112-24.832 23.296-48.128 48.128-72.192 72.448-6.144 6.144-11.008 9.984-18.944 1.536q-151.296-156.672-303.104-313.344a8.1664 8.1664 0 0 1-1.024-3.328z m38.656 632.832c88.064-90.112 173.824-177.408 258.56-265.472 13.056-13.312 20.224-13.312 32.256 0.256a757.76 757.76 0 0 0 54.784 56.32c11.52 11.008 12.288 16.384-3.328 24.832-101.632 55.552-202.496 112.128-303.616 168.192a78.2848 78.2848 0 0 1-38.656 15.872z m521.984-303.104a30.1824 30.1824 0 0 1-16.128 26.624c-40.448 23.04-80.896 45.568-121.088 68.608a13.568 13.568 0 0 1-18.688-4.608c-23.04-24.064-46.08-48.128-69.632-71.68a11.4944 11.4944 0 0 1 0.256-19.456q40.96-40.704 81.408-82.176a15.616 15.616 0 0 1 22.016-3.584c33.792 19.968 67.84 39.168 101.888 58.368a33.28 33.28 0 0 1 19.968 27.904z" />
            </svg>
            <span>Google Play Download</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-links">
            <a class="footer-link" href="/index.html">慧搜</a>
            <a class="footer-link" href="/privacy_en.html">Privacy Policy</a>
            <a class="footer-link" href="/guide_en.html">User's Guide</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 现代化样式重构 - 保持原有蓝色主题 */

.app-container {
  min-height: 100vh;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  padding: 60px 0;
  text-align: center;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.logo-container {
  flex-shrink: 0;
}

.logo-image {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.05);
}

.hero-text {
  text-align: left;
  max-width: 600px;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: white;
}

.subtitle {
  font-size: 1.3rem;
  margin: 0 0 30px 0;
  opacity: 0.9;
  line-height: 1.6;
}

.feature-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tag {
  background: #e2d849;
  color: #14283d;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Section Titles */
.section-title {
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 40px 0;
  color: white;
}

/* Description Section */
.description-section {
  padding: 60px 0;
  background: #95c1e4;
}

.description-card {
  background: #95c1e4;
  border-radius: 12px;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.description-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0 0 20px 0;
  color: #14283d;
}

.highlight-text {
  font-weight: 600;
  font-size: 1.2rem !important;
}

.privacy-text {
  background: rgba(20, 40, 61, 0.1);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #2b73af;
  font-weight: 500;
}

/* Screenshots Section */
.screenshots-section {
  padding: 60px 0;
  background: #1f3e5b;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.screenshot-item {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
}

.screenshot-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.screenshot-item img {
  width: 100%;
  height: auto;
  border-radius: 6px;
}

/* Video Section */
.video-section {
  padding: 60px 0;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.video-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
}

.video-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.video-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  text-align: center;
  color: white;
}

.video-container {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: 0 auto;
}

.video-container video {
  width: 100%;
  height: auto;
  display: block;
}

/* Download Section */
.download-section {
  padding: 60px 0;
  text-align: center;
}

.download-container {
  margin-top: 30px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #4CAF50;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  position: relative;
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(76, 175, 80, 0.4);
  background: #45a049;
}

.download-btn a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.google-play-icon {
  width: 32px;
  height: auto;
  fill: currentColor;
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.2);
  padding: 40px 0 30px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  text-align: center;
}

.footer-links {
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
}

.footer-link:hover {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.5);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 0;
  }
  
  .logo-section {
    flex-direction: column;
    gap: 25px;
  }
  
  .hero-text {
    text-align: center;
  }
  
  .main-title {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .description-card {
    padding: 25px 20px;
  }
  
  .screenshots-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .video-card {
    padding: 20px;
  }
  
  .download-btn {
    padding: 14px 28px;
    font-size: 1rem;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  .hero-content {
    padding: 0 15px;
  }
  
  .main-title {
    font-size: 1.8rem;
  }
  
  .feature-tags {
    justify-content: center;
  }
  
  .tag {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
  
  .video-grid {
    grid-template-columns: 1fr;
  }
  
  .screenshots-grid {
    grid-template-columns: 1fr;
  }
}
</style>